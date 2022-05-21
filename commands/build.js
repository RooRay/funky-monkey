const Discord = require("discord.js")

module.exports = {
	name: 'build',
	description: "shows information about the bot build",
	execute(message, args){
		let embed = new Discord.MessageEmbed()
		.setTitle("Build Information")
		.setColor('RANDOM')
		.setTimestamp()
		.addFields({ name: "Build Variant (Dev or Stable)", value: "Dev" })
		.addFields({ name: "Build Version", value: "1.0.3" })
		.addFields({ name: "Build Released", value: "16th January 2022" })
		.addFields({ name: "Build Changelog", value: "- Added a new riddy command (doesn't fully work yet)" })
		.setFooter({ text: "Developed by RooRay#0001" })

		message.channel.send({embeds:[embed], content: "All you need to know is below!"})
	}
}