const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Bot is functioning and online!")
})

app.get("/", (req, res) => {
  res.send ("Hello! If you see this screen that means the bot is functioning!:D");
})

const Discord = require("discord.js")
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageCreate", message => {
  if(message.content === "ping") {
    message.channel.send("pong!")
  }
	if(message.content === "testembed") {
		let embed = new Discord.MessageEmbed()
		.setTitle("Embed Test")
		.setURL("https://redirects.rooray.link/u/gWOb3o6Z")
		.setDescription("Hiya! This is just a test embed to make sure this new, DiscordJS 13 bot works fully! The bot is gonna have lots of fun and cool features soon. ")
		.addField("I will", "stomp your kneecaps backwards")
		.setThumbnail(message.author.displayAvatarURL)
		.setFooter("Psst! The colour on the side of this message changes every time you run it!")
		.setColor("RANDOM")
		.setTimestamp()

		message.channel.send({embeds:[embed], content: "Your wish is my command!"})
	}
	if(message.content === "build" {
		let embed = new Discord.MessageEmbed()
		.setTitle("Build Information")
		.addfield("Build Variant (Dev or Stable)", "Dev")
		.addfield("Build Version", "1.0.1")
		.addfield("Build Released", "14th January 2022")
		.addfield("Build Changelog", "Added some smaller commands and fixed some things.")
		.setColor("RED")
		.setTimestamp()

		message.channel.send({embeds:[embed], content: "All you need to know is below!"})
})

client.login(process.env.token)