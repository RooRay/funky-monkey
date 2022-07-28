const Discord = require("discord.js")

module.exports = {
	name: 'build',
	description: "shows information about the bot build",
	execute(message, args){
		let embed = new Discord.MessageEmbed()
		.setTitle("Build Information")
		.setColor('GREEN')
		.setTimestamp()
		.addFields({ name: "Build Variant (Dev or Stable)", value: "Dev" })
		.addFields({ name: "Build Version", value: "1.0.6" })
		.addFields({ name: "Build Released", value: "28th July 2022" })
		.addFields({ name: "Build Changelog", value: "Made some minor wording changes and improvements, bot is now also hosted on Railway rather than Replit" })
		.setFooter({ text: "Developed by RooRay#0001" })

		message.channel.send({embeds:[embed], content: "Here's all you need to know about this installation of the bot! (～￣▽￣)～"})
	}
}