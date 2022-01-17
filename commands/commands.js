module.exports = {
	name: 'commands',
	description: "Lists the bots commands",
	execute(message, args){
		let embed = new Discord.MessageEmbed()
		.setTitle("Bot Commands")
		.addField("Utility", "`Build`, `Ping`")
		.addField("More commands and categories will be added in the future")
		.setColor("RED")
		.setFooter("Developed by RooRay#0001")
		.setTimestamp()

		message.channel.send({embeds:[embed], content: "Here's all the commands!"})
	}
}