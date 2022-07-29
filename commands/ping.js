const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

module.exports = {
	name: 'ping',
	description: "ping command",
	execute(message, args){
		var ping = Date.now() - message.createdTimestamp + " ms";
    message.channel.send("🏓 Pong!\nMy latency to Discord is `" + `${Date.now() - message.createdTimestamp}` + "`ms!\nTry beat me at ping pong, I dare you（￣︶￣）");
	}
}