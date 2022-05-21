const express = require("express");
const Discord = require("discord.js");
const fs = require('fs');
const app = express();
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

app.listen (3000, () => { 
    console.log("Booted and connected to Discord successfully!");
});

app.get("/", (req, res) => { 
  res.send ("Hey! If you see this, that means the bot is online and functioning normally!");
});
  

client.commands = new Discord. Collection();
  
const commandFiles = fs.readdirSync('./commands').filter (file => file.endsWith('.js')); 
  
for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        client.commands.set(command.name, command);
}

const prefix = "%";
  
client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
  client.commands.get(command)?.execute(message, args);

});

client.login (process.env.token);