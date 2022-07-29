module.exports = {
	name: 'help', // this name will be referenced in index.js
	description: "help", // doesn't really matter
	execute(message, args){
		message.channel.send("**Yo, I'm funky monkey. (づ￣ 3￣)づ**\nA discord bot that does all sorts of random stuffs made by RooRay#0001 and a handful of others.\nUse the command `%commands` to see all the available commands and `%credits` to see all the amazing people who helped make me a reality! \(￣︶￣*\))")
	}
}