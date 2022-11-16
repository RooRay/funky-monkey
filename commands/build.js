const Discord = require("discord.js")

module.exports = {
	name: 'build',
	description: "shows information about the bot build",
	execute(message, args){
		let embed = new Discord.MessageEmbed()
		.setTitle("Build Information")
		.setColor('YELLOW')
		.setTimestamp()
		.addFields({ name: "Build Variant (Dev or Stable)", value: "Dev" })
		.addFields({ name: "Build Version", value: "1.0.8-beta" })
		.addFields({ name: "Build Released", value: "16th November 2022" })
		.addFields({ name: "Build Changelog", value: "- Some small wording and refactoring changes and other things." })
		.setFooter({ text: "Developed by RooRay#0001" })

		message.channel.send({embeds:[embed], content: "Here's all you need to know about this installation of the bot! (～￣▽￣)～"})
	}
}