const Discord = require("discord.js")

module.exports = {
	name: 'commands',
	description: "Lists the bots commands",
	execute(message, args){
		let embed = new Discord.MessageEmbed()
		.setTitle("Bot Commands")
		.addFields({ name: "Utility", value: "`Build`, `Ping`" })
		.addFields({ name: "Others", value: "More commands and categories will be added in the future" })
		.setColor('RANDOM')
		.setFooter("Developed by RooRay#0001")
		.setTimestamp()

		message.channel.send({embeds:[embed], content: "Here's all the commands!"})
	}
}