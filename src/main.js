// Aether
// Discord Bot, written in Javascript
// Created by anadaren


// Dependancies //

// Reqires file with login token
// !! Comment this section out before posting anywhere !!
require('dotenv').config();

// ReadableStream
global.ReadableStream = require('web-streams-polyfill').ReadableStream;

// Requires configuration file
const config = require("../config.json");

// Imports data from the discord.js module
const { Client, GatewayIntentBits } = require('discord.js');

// Create an instance of a Discord client
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
})



// Prints to console when first online
client.on("ready", () => {
    // prints name
	console.log("Connected as " + client.user.tag);
	
	client.user.setActivity("Minecraft");
	// client.user.setActivity("Tiktok", {type: "WATCHING"})
    // ^^^Line for changing type of activity (default is "PLAYING")
});
client.on("error", console.error);
client.on("warn", console.warn);


// Commands
client.on('messageCreate', (message) => {
	// Keeps bot from responding to other bots
	if(message.author.bot){
		return;
	}
	if(message.content == 'hi') {
		//message.reply('Hello there');
	}
});


//const commandHandler = require("./commands.js")
//client.on("message", commandHandler);


require("./register-commands.js")

// Slash Commands
client.on('interactionCreate', (interaction) => {
	if(!interaction.isChatInputCommand()) return;
	
	if(interaction.commandName === 'hi'){
		interaction.reply('Hello there');
	}

	if(interaction.commandName === 'add'){
		const num1 = interaction.options.get('first-number')?.value;
		const num2 = interaction.options.get('second-number')?.value;
		interaction.reply("The sum of those two numbers is " + (num1 + num2));
	}
});

// Log the bot in using it's token
client.login(process.env.TOKEN);