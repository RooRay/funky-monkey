const Discord = require("discord.js")

module.exports = {
	name: 'credits', // this name will be referenced in index.js
	description: "lists all the peeps that helped me", // doesn't really matter
	execute(message, args){
		let embed = new Discord.MessageEmbed()
		.setTitle("Credits")
		.addFields({ name: "Primary Developer", value: "RooRay (AKA RooRay#0001)" })
		.addFields({ name: "Coding help", value: "Trains (AKA Ashish#0540)" })
		.addFields({ name: "Testing", value: "RooRay (AKA RooRay#0001), Lewis (AKA ruisu#2755" })
		.setColor('YELLOW')
		.setFooter("Developed by RooRay#0001")
		.setTimestamp()

		message.channel.send({embeds:[embed], content: "Thanks for using this bot!"})
	}
}