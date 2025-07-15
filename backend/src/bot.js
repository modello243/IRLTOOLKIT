require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const { Telegraf } = require('telegraf');

const discord = new Client({ intents: [GatewayIntentBits.Guilds] });
discord.login(process.env.DISCORD_TOKEN)
  .then(() => console.log('Discord bot online'))
  .catch(console.error);

const telegram = new Telegraf(process.env.TELEGRAM_TOKEN);
telegram.start(ctx => ctx.reply('IRLToolkit bot ready'));
telegram.launch()
  .then(()=>console.log('Telegram bot online'))
  .catch(console.error);
