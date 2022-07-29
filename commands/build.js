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
		.addFields({ name: "Build Version", value: "1.0.7" })
		.addFields({ name: "Build Released", value: "29th July 2022" })
		.addFields({ name: "Build Changelog", value: "Fixed some small issues with text formatting, also removed riddy command as unsure if it would fit the bot." })
		.setFooter({ text: "Developed by RooRay#0001" })

		message.channel.send({embeds:[embed], content: "Here's all you need to know about this installation of the bot! (～￣▽￣)～"})
	}
}