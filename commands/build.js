const Discord = require("discord.js")

module.exports = {
	name: 'build',
	description: "shows information about the bot build",
	execute(message, args){
		let embed = new Discord.MessageEmbed()
		.setTitle("Build Information")
		.addField("Build Variant (Dev or Stable)", "Dev")
		.addField("Build Version", "1.0.2")
		.addField("Build Released", "16th January 2022")
		.addField("Build Changelog", "-Added a command handler and added commands to it.\n-Improved the ping command.")
		.setColor("RED")
		.setFooter("Developed by RooRay#0001")
		.setTimestamp()

		message.channel.send({embeds:[embed], content: "All you need to know is below!"})
	}
}