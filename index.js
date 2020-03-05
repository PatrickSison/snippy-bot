const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config/default.json');
const _ = require('lodash');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
    console.log('Replied');
  }
});

client.login(_.get(config, 'discord.secret'));