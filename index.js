require('dotenv').config(); // Load environment variables
const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const express = require('express'); // For running on port 8000

// Load environment variables
const BOT_TOKEN = process.env.BOT_TOKEN;
const API_KEY = process.env.API_KEY;
const CHANNEL_ID = process.env.CHANNEL_ID;

// Create a bot instance
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Store video URLs temporarily
const videoUrlStore = new Map();

// Function to generate a unique ID for callback_data
function generateUniqueId() {
  return crypto.randomBytes(8).toString('hex'); // Generates a 16-character unique ID
}

// Function to generate a unique filename
function generateUniqueFilename() {
  const timestamp = Date.now();
  const randomString = crypto.randomBytes(4).toString('hex');
  return `video_${timestamp}_${randomString}.mp4`;
}

// Function to decode Unicode escape sequences in a string
function decodeUnicode(str) {
  return JSON.parse(`"${str}"`);
}

// Function to check if a user is a member of the channel
async function isUserSubscribed(chatId, userId) {
  try {
    const response = await axios.get(
      `https://api.telegram.org/bot${BOT_TOKEN}/getChatMember?chat_id=${CHANNEL_ID}&user_id=${userId}`
    );
    const status = response.data.result.status;
    return status === 'member' || status === 'administrator' || status === 'creator';
  } catch (error) {
    console.error('Error checking subscription:', error);
    return false;
  }
}

// Function to send the URL to the API and get the response
async function downloadFacebookVideo(url) {
  try {
    const apiUrl = `https://api.skymansion.site/fb-dl/download/?api_key=${API_KEY}&url=${encodeURIComponent(url)}`;
    const response = await axios.get(apiUrl);
    return response.data; // Return the API response
  } catch (error) {
    console.error('Error downloading video:', error);
    return null;
  }
}

// Function to download a file from a URL and save it locally
async function downloadFile(url, filePath) {
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  const writer = fs.createWriteStream(filePath);
  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

// Listen for any kind of message
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const text = msg.text;

  // Check if the user is subscribed
  const isSubscribed = await isUserSubscribed(chatId, userId);

  if (!isSubscribed) {
    // If not subscribed, send a message asking them to join the channel
    bot.sendMessage(
      chatId,
      `Please subscribe to the channel to use this bot.`,
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Join Channel', url: `https://t.me/${CHANNEL_ID.slice(1)}` }],
          ],
        },
      }
    );
    return;
  }

  // If the message is a URL, process it
  if (text.startsWith('http') || text.startsWith('www')) {
    bot.sendMessage(chatId, 'Processing your request...');

    // Send the URL to the API
    const apiResponse = await downloadFacebookVideo(text);

    if (apiResponse && apiResponse.result) {
      const { title, image, duration, reactors, comments, sourceHd, sourceSd } = apiResponse.result;

      // Decode the Unicode escape sequences in the title
      const decodedTitle = decodeUnicode(title);

      // Generate unique IDs for callback_data
      const hdId = generateUniqueId();
      const sdId = generateUniqueId();

      // Store the URLs in the Map
      videoUrlStore.set(hdId, sourceHd);
      videoUrlStore.set(sdId, sourceSd);

      // Format the message
      const message = `
*${decodedTitle}*

*Duration*: ${duration}
*Likes*: ${reactors}
*Comments*: ${comments}
      `;

      // Send the image with the formatted message and buttons
      bot.sendPhoto(chatId, image, {
        caption: message,
        parse_mode: 'Markdown',
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Download HD', callback_data: hdId }],
            [{ text: 'Download SD', callback_data: sdId }],
          ],
        },
      });
    } else {
      bot.sendMessage(chatId, 'Failed to process the video. Please check the URL and try again.');
    }
  } else {
    bot.sendMessage(chatId, 'Please send a valid Facebook video URL.');
  }
});

// Handle button clicks
bot.on('callback_query', async (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const data = callbackQuery.data;

  // Notify the user that the download is in progress
  await bot.answerCallbackQuery(callbackQuery.id, { text: 'Downloading video...' });

  try {
    // Retrieve the video URL from the Map
    const videoUrl = videoUrlStore.get(data);

    if (!videoUrl) {
      throw new Error('Video URL not found.');
    }

    // Generate a unique filename for the video
    const filename = generateUniqueFilename();
    const filePath = path.join(__dirname, filename);

    // Download the video file
    await downloadFile(videoUrl, filePath);

    // Send the video file to the user
    await bot.sendVideo(chatId, fs.createReadStream(filePath));

    // Delete the downloaded file after sending
    fs.unlinkSync(filePath);
  } catch (error) {
    console.error('Error sending video:', error);
    await bot.sendMessage(chatId, 'Failed to send the video. Please try again.');
  }
});

// Start an HTTP server for Koyeb
const app = express();
app.get('/', (req, res) => {
  res.send('Telegram bot is running...');
});

app.listen(8000, () => {
  console.log('Bot is running on port 8000...');
});