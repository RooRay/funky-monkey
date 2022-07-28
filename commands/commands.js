const Discord = require("discord.js")

module.exports = {
	name: 'commands',
	description: "Lists the bots commands",
	execute(message, args){
		let embed = new Discord.MessageEmbed()
		.setTitle("Bot Commands")
		.addFields({ name: "Utility", value: "`Build`, `Ping`" })
		.addFields({ name: "Fun", value: "`Riddy`" })
		.addFields({ name: "Miscellaneous", value: "`Credits`" })
		.addFields({ name: "Others", value: "More commands and categories of commands should be added in the near future.™️" })
		.setColor('LIGHT_GREY')
		.setFooter("Developed by RooRay#0001")
		.setTimestamp()

		message.channel.send({embeds:[embed], content: "Here are all the commands! Think you'll be able to remember them all? (￣y▽￣)╭"})
	}
}