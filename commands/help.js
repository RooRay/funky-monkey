module.exports = {
	name: 'help', // this name will be referenced in index.js
	description: "help", // doesn't really matter
	execute(message, args){
		message.channel.send("**Hey! I'm funky monkey.**\nA discord bot that does all sorts of random shit made by RooRay#0001 and others.\nUse the command `%commands` to see all the available commands and `%credits` to see all the amazing people who helped make me a reality. 😁")
	}
}