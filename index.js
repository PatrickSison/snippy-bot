const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config/default.json');

console.log('Starting...')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const { prefix, youtubeSecret, discordSecret } = config;

client.on('message', msg => {
	
	if (msg.author.bot) return;

	msg.content = msg.content.toLowerCase();
	
	if (false) {

	} else {
		switch (msg.content) {
			case 're':
				msg.channel.send('REEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE');
				break;
			case 'betty dab':
				msg.channel.send('https://i.imgur.com/rwElyFd.gif');
				break;
			case 'ligma':
				msg.channel.send('https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif');
				msg.channel.send('LIGMA BALLS');
			case 'sugma':
				msg.channel.send('https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif');
				msg.channel.send('SUGMA DICK');
			case 'gotta bounce':
				msg.channel.send('GOTTA BOUNCE ON MAH BOYS DICK');	
				msg.channel.send('https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif');
				msg.channel.send('https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif');
				msg.channel.send('https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif');
		}
	}

    msg.channel.send('https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif');
    msg.channel.send('LIGMA BALLS');
  }
});

client.login(process.env.DISCORD_SECRET);
