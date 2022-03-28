module.exports = {
    name: "riddy", 
    description: "sends riddys", 
    async execute(message, args) {
        let mention = message.mentions.members.first()
				if (!mention) return message.channel.send("mention a person dumb") 
				let images = {
				"526163845090115605" : ["https://cdn.discordapp.com/attachments/898314372626145311/937693828444459078/IMG_0319.png", "https://cdn.discordapp.com/attachments/898314372626145311/928722589914890310/unknown.png"]
					}	
message.channel.send(images[mention.id][Math.floor(Math.random() * images[mention.id].length)])
    } 
}