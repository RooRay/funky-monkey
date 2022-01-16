const express = require("express");
const Discord = require("discord.js")
const fs = require('fs');
const app = express();
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

app.listen(3000, () => {
  console.log("Bot is functioning and online!")
})

app.get("/", (req, res) => {
  res.send ("Hello! If you see this screen that means the bot is functioning!:D");
})

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

app.get("/", (req, res) => {
  res.send ("Bot is working!");
})

const prefix = '%';

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'ping'){
		client.commands.get('ping').execute(message, args);
	} else if (command == 'dingus') {
		message.channel.send('dingus')
	}
});

client.login(process.env.token)