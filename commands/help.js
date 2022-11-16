module.exports = {
	name: 'help', // this name will be referenced in index.js
	description: "help", // doesn't really matter
	execute(message, args){
		message.channel.send("**Heyo, I'm funky monkey (づ￣ 3￣)づ**\nA Discord bot that does all sorts of things made by RooRay#0001 with the help of a handful of others.\nRun `%commands` to see all the commands you can run and `%credits` to see all the amazing people who helped make me a reality! \(￣︶￣*\))")
	}
}