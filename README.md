
# Facebook Video Downloader Telegram Bot 🚀

A modern and feature-rich Telegram bot to download Facebook videos directly from shared links. Powered by the **Skymansion Facebook Video Downloader API**.

[![Telegram Bot](https://img.shields.io/badge/Telegram-Bot-blue.svg)](https://t.me/skymansionfb_bot)
[![API](https://img.shields.io/badge/API-Skymansion-brightgreen.svg)](https://api.skymansion.site/fb-dl/)
[![GitHub License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/yourusername/fb-dl-telegram-bot/blob/main/LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![Koyeb](https://img.shields.io/badge/Deploy%20on-Koyeb-6f42c1.svg)](https://www.koyeb.com)

---

## Features ✨

- **Download Facebook Videos**: Download videos in **HD** or **SD** quality.
- **Unicode Title Support**: Display video titles in any language.
- **Interactive Buttons**: Choose between HD or SD downloads with ease.
- **Channel Subscription**: Ensure users subscribe to your channel before using the bot.
- **Fast & Reliable**: Powered by the Skymansion API for seamless downloads.
- **Health Checks**: Built-in health check endpoint for deployment platforms like Koyeb.

---

## Live Bot 🌐

Try the live bot here: [@skymansionfb_bot](https://t.me/skymansionfb_bot)

---

## Setup Instructions 🛠️

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed (v16 or higher).
2. **Telegram Bot Token**: Get your bot token from [BotFather](https://core.telegram.org/bots#botfather).
3. **Skymansion API Key**: Get your free API key from [Skymansion Facebook Downloader API](https://api.skymansion.site/fb-dl/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/rasanjanapiumal99/fb-dl-telegram-bot.git
   cd fb-dl-telegram-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   BOT_TOKEN=your_telegram_bot_token
   CHANNEL_ID=your_channel_id
   API_KEY=your_skymansion_api_key
   ```

4. Start the bot:
   ```bash
   npm start
   ```

---

## Usage 📲

1. **Start the Bot**: Send `/start` to the bot.
2. **Send Facebook Video URL**: Share the Facebook video URL you want to download.
3. **Choose Download Option**: Select from the available options (**HD** or **SD**).

---

## API Usage

This bot uses the **Skymansion Facebook Video Downloader API**. You can get your free API key from [here](https://api.skymansion.site/fb-dl/).

### Example API Request

```bash
GET https://api.skymansion.site/fb-dl/download/?api_key=YOUR_API_KEY&url=FACEBOOK_VIDEO_URL
```

### Example API Response

```json
{
    "result": {
        "videoId": "4785803171707094",
        "title": "\\u0db8\\u0db8 \\u0db8\\u0dd0\\u0da2\\u0dd2\\u0d9a\\u0dca \\u0d91\\u0d9a\\u0d9a\\u0dca \\u0db4\\u0dd9\\u0db1\\u0dca\\u0db1\\u0db1\\u0dca\\u0db1\\u0daf..? \\ud83e\\uddd9\\ud83c\\udffb\\u200d\\u2640\\ufe0f\\ud83e\\udd17\\n\\nHair Cut By Master Stylist Surith Rasantha\\n\\nhttps:\\/\\/youtube.com\\/shorts\\/8PHQ2wC1hAI\\n\\n\\u2b55 Transforming Looks, elevating Confidence \\u2714\\n\\nFor more details contact us through\\nCall us or contact us on WhatsApp\\n\\u260e\\ufe0f0713144544\\/ 0706144544\\/ 0112845094\\n\\ud83d\\udcccLocation : No.240\\/1\\/1, Kotte road, Nugegoda\\n\\n#SalonZero #MasterStylistSurithRasantha #hairstyles #haircut #unisex #professional #haircare #fashiontrends #trending #hairlovers #hairsalon #salon #SriLanka #colombo #BestSalon #viralvideo\\u30b7 #unisexsalon #haircolor #layercut \\u2764\\ufe0f #srilankanbestsalon #bobcuts #nugegoda #HairTransformation",
        "sourceSd": "https://video.fsgn2-10.fna.fbcdn.net/o1/v/t2/f2/m69/AQP66WDKpcXNFGoaxqFhBU4RNYKmkW6jd2MhixkJR_LgotWotCZKBIWfIyGtTozShfVAUA2COdcUP4Fg0BVKWN1i.mp4?strext=1&_nc_cat=109&_nc_sid=8bf8fe&_nc_ht=video.fsgn2-10.fna.fbcdn.net&_nc_ohc=QuMVy8hRIfsQ7kNvgGzKEDk&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuMzYwLnN2ZV9zZCIsInhwdl9hc3NldF9pZCI6MTE0MTY3NDg0MDk5NzUzMSwidmlfdXNlY2FzZV9pZCI6MTAxMjIsImR1cmF0aW9uX3MiOjg1LCJ1cmxnZW5fc291cmNlIjoid3d3In0%3D&ccb=17-1&_nc_zt=28&oh=00_AYFcnIAzqWNYxJM6_ol8HBE0g8PzIPEaRmjpWriAZlVPRA&oe=67DD373D",
        "sourceHd": "https://video.fsgn2-8.fna.fbcdn.net/o1/v/t2/f2/m69/AQPbsxsMYZtcRG0OmiN8Y_21gJsNad7SW1y-zzVq6wHaYz-67KWGm1RgCH26tvOsvBpLKNv6u4N1-UInZbB-qfmm.mp4?strext=1&_nc_cat=102&_nc_sid=5e9851&_nc_ht=video.fsgn2-8.fna.fbcdn.net&_nc_ohc=fsQSLhRNl1MQ7kNvgGEocwa&efg=eyJ2ZW5jb2RlX3RhZyI6Inhwdl9wcm9ncmVzc2l2ZS5GQUNFQk9PSy4uQzMuNzIwLmRhc2hfaDI2NC1iYXNpYy1nZW4yXzcyMHAiLCJ4cHZfYXNzZXRfaWQiOjExNDE2NzQ4NDA5OTc1MzEsInZpX3VzZWNhc2VfaWQiOjEwMTIyLCJkdXJhdGlvbl9zIjo4NSwidXJsZ2VuX3NvdXJjZSI6Ind3dyJ9&ccb=17-1&vs=d034813a1f214386&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HR3JPb2h6bWh5WC10MkVHQUxySkZMbW40Z2hUYm1kakFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dOVG1raHlfd0RjVWRZRUdBTkZmcXlFSXlVODZickZxQUFBRhUCAsgBACgAGAAbAogHdXNlX29pbAExEnByb2dyZXNzaXZlX3JlY2lwZQExFQAAJrb6xbWclocEFQIoAkMzLBdAVUQ5WBBiThgZZGFzaF9oMjY0LWJhc2ljLWdlbjJfNzIwcBEAdQIA&_nc_zt=28&oh=00_AYFSf-J6DfqZjwjjytWURCbds_x-5BSJ5APttija-zjRtw&oe=67DD2F04",
        "image": "https://scontent.fsgn2-6.fna.fbcdn.net/v/t15.5256-10/479203346_1199194492209336_4341077764857320342_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=110&ccb=1-7&_nc_sid=be8305&_nc_ohc=FTXSPzaIMAsQ7kNvgFrTNUD&_nc_zt=23&_nc_ht=scontent.fsgn2-6.fna&_nc_gid=kR_zJt13wv_72IgYoz-98A&oh=00_AYGRGm1peYNO94M8BjjulzK52eiWY06MHBNDc_UoeCPj8w&oe=67DD4D8B",
        "duration": "01:25",
        "httpCode": 200,
        "reactors": 654,
        "comments": 0
    }
}
```

---

## Deployment 🚀

### Koyeb Deployment
[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com/yourusername/fb-dl-telegram-bot)

1. Set **Run Command**: `npm start`
2. Configure **Port**: `8000`
3. Add environment variables:
   - `BOT_TOKEN`
   - `API_KEY`
   - `CHANNEL_ID`
4. Set health check path: `/health`

---

## Contributing 🤝

We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Support

For support or questions, please open an issue on [GitHub](https://github.com/rasanjanapiumal99/fb-dl-telegram-bot/issues) or contact us via Telegram.

---

## Credits

- **Skymansion API**: [https://api.skymansion.site/fb-dl/](https://api.skymansion.site/fb-dl/)
- **Node.js Telegram Bot API**: [https://github.com/yagop/node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)

---

**Enjoy downloading Facebook videos with ease!** 🎥


---

