// Aether
// Discord Bot, written in Javascript
// Created by anadarens

// Import the discord.js module
const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client();
//Recognizes command prefixes
const PREFIX = "a!";

// Prints to console when first online
client.on('ready', () => {
	console.log("Connected as " + client.user.tag)
	
	client.user.setActivity("Minecraft");
	//client.user.setActivity("Tiktok", {type: "WATCHING"})
});


// How the bot handles commands being said in the chat
const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(PREFIX + cmdName);

client.on('message', message => {
	// Keeps the bot from saying something that will call itself
	if(message.author.bot) return;
		
	/*Non-commands*/
	
	//Says hello
	if(message.content === "hi Aether"){
		message.channel.send("Don't talk to me");
		//message.reply("bitch"); 
	}
		
	
	//Kicks users for slurs
	let blacklisted = [/*put in blacklisted words*/];
	for(var i in blacklisted){
	if(message.content.toLowerCase().includes(blacklisted[i]))
	{
		message.delete();
		message.reply("Don't say slurs, asshole");
	}
	}
	
	
	/*Commands*/
		
	//Says hello, but this time on purpose
	if(isValidCommand(message, "hello")){
		message.reply("Hello");
	}
		

	//Diceroll
	const rollDice = () => Math.floor(Math.random() * 6) + 1;

	//Prints Dicerolls
	if(isValidCommand(message, "roll")){
		message.reply("rolled a " + rollDice());
	}


	if(isValidCommand(message, "roll")){
		message.reply("rolled a " + rollDice());
	}

	/* //Adds numbers
	if(isValidCommand(message, "add")){
		let args = message.content.toLowerCase().substring(6);
		let {cache} = message.guild.roles;
	}*/
	
});

// Log the bot in using it's token
client.login("NzMxNzQ1NTc0ODk4MTA2MzY4.Xwqhfg.4H4L3qx-uj-AVFMDrA0EtTOrzP4");