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
		.addFields({ name: "Build Version", value: "1.0.4" })
		.addFields({ name: "Build Released", value: "21st May 2022" })
		.addFields({ name: "Build Changelog", value: "- Fixed the credits command, changed colouring of embeds and other small changes and fixes" })
		.setFooter({ text: "Developed by RooRay#0001" })

		message.channel.send({embeds:[embed], content: "All you need to know is below!"})
	}
}