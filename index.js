const Discord = require('discord.js');
const config = require('./config/default.json');
const ytdl = require('ytdl-core');

const client = new Discord.Client();
const queue = new Map();

console.log('Starting...');

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});


const { prefix } = config;

client.on('message', msg => {
	if (msg.author.bot) return;


	if (msg.content.startsWith(prefix)) {
		const serverQueue = queue.get(msg.guild.id);

		if (msg.content.startsWith(`${prefix}play`)) {
			execute(msg, serverQueue);
			return;
		} else if (msg.content.startsWith(`${prefix}skip`)) {
			skip(msg, serverQueue);
			return;
		} else if (msg.content.startsWith(`${prefix}stop`)) {
			stop(msg, serverQueue);
			return;
		} else {
			msg.channel.send('You need to enter a valid command!')
		}
	} else {
		msg.content = msg.content.toLowerCase();
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
				break;
			case 'sugma':
				msg.channel.send('https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif');
				msg.channel.send('SUGMA DICK');
				break;
			case 'gotta bounce':
				msg.channel.send('GOTTA BOUNCE ON MAH BOYS DICK');
				msg.channel.send('https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif');
				msg.channel.send('https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif');
				msg.channel.send('https://media.giphy.com/media/wIyvbQa4g7CajwxkD5/giphy.gif');
				break;
		}
	}
});

async function execute(msg, serverQueue) {
	const args = msg.content.split(' ');

	const voiceChannel = msg.member.voice.channel;
	
	if (!voiceChannel) return msg.channel.send('You need to be in a voice channel to play music!');
	const permissions = voiceChannel.permissionsFor(msg.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return msg.channel.send('I need the permissions to join and speak in your voice channel!');
	}
	
	const songInfo = await ytdl.getInfo(args[1]);
	
	//const songInfo2 = await ytdl.getInfo('test');
	//console.log(songInfo2);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};
	
	if (!serverQueue) {
		const queueContruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(msg.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			console.log('Attempting to join voice channel');
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			console.log('Trying to play?');
			play(msg.guild, queueContruct.songs[0]);
		} catch (err) {
			console.log(err);
			queue.delete(msg.guild.id);
			return msg.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return msg.channel.send(`${song.title} has been added to the queue!`);
	}

}

function skip(msg, serverQueue) {
	if (!msg.member.voiceChannel) return msg.channel.send('You have to be in a voice channel to stop the music!');
	if (!serverQueue) return msg.channel.send('There is no song that I could skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(msg, serverQueue) {
	if (!msg.member.voiceChannel) return msg.channel.send('You have to be in a voice channel to stop the music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);
	console.log('HERE');
	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
		});
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
}

client.login(process.env.DISCORD_SECRET);
