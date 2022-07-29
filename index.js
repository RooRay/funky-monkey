const express = require("express");
const Discord = require("discord.js");
const fs = require('fs');
const app = express();
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.once('ready', () => {
    console.log(`Logged in to Discord successfully as ${client.user.username}#${client.user.discriminator}`);
});

client.commands = new Discord. Collection();
  
const commandFiles = fs.readdirSync('./commands').filter (file => file.endsWith('.js')); 
  
for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
}

const prefix = "%";
  
client.on('messageCreate', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
	if (!client.commands.get(command)) return message.channel.send(":no_entry_sign: Sorry chap but that command's invalid, check `%commands` to see what commands this bot has.")
  client.commands.get(command)?.execute(message, args);

});

client.login (process.env.token);