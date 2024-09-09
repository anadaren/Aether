// Aether
// Discord Bot, written in Javascript
// Created by anadaren


// Dependancies //

// Reqires file with secure tokens
require('dotenv').config();

// Converts to ReadableStream
global.ReadableStream = require('web-streams-polyfill').ReadableStream;

// Requires configuration file
const config = require("../config.json");

// Imports data from the discord.js module
const { Client, GatewayIntentBits } = require('discord.js');

const eventHandler = require('./eventHandler.js');


// Create an instance of a Discord client
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent
	]
})

// Event Listener
client.on("ready", () => {
	console.log("Connected as " + client.user.tag);
	
	client.user.setActivity("Minecraft");
	// client.user.setActivity("Tiktok", {type: "WATCHING"})
    // ^^^Line for changing type of activity (default is "PLAYING")
});

// Commands
const commandHandler = require("./commands.js");
//client.on("message", commandHandler);

// Indirect Commands
client.on('messageCreate', (message) => {
	// Keeps bot from responding to other bots
	if(message.author.bot){
		return;
	}

	// Checks if anyone is referring to them without talking to them directly
    if(message.content.toLowerCase().includes("aether")){
        //Says hello
        if(message.content.toLowerCase() == "hi aether"){
            message.reply("Don't talk to me.");
        } else if(message.content.toLowerCase() == "bye aether"){
            message.reply("Goodbye :rolling_eyes:");
        } else if(message.content.includes("thank you") || message.content.includes("thanks")){
            message.reply("You're welcome. XOXO, kisses<3");
        } else
		{
            message.reply("Don't talk about me.");
        }
    }

	// Flags users using blacklisted words
    // Deletes the offending message, lets user off with an (aggressive) warning
    let blacklisted = [/*put in blacklisted words*/];
    for(var i in blacklisted){
        if(message.content.toLowerCase().includes(blacklisted[i]))
        {
            message.delete();
            message.reply("Don't say that.");
        }
    }
	
});



// Slash Commands
require("./register-commands.js")

client.on('interactionCreate', (interaction) => {
	if(!interaction.isChatInputCommand()) return;
	
	// hi
	if(interaction.commandName === 'hi'){
		interaction.reply('Hello there');
	}

	// 8-Ball
	if(interaction.commandName === '8-ball'){
		// Magic 8-Ball Feature
        // List of responses
        const eightBall = [
            "Seems so, yes",
            "Looks likely",
            "Sure, with that attitude, you can trick yourself into anything",
            "I'm busy, figure it out yourself.",
            "Depends on how legal you want the solution to be",
            "Looks like--oh. Oh dear. That's not good. Best ask again...",
            "I don't like your tone, so I'm going to say no. Hope that helps<3",
            "No"
        ]
        // Picks random response
        const eightReply = Math.floor(Math.random() * eightBall.length);
        // Prints response if a question is asked
        interaction.reply(eightBall[eightReply]);
	}

	// Dice roll
	if(interaction.commandName === 'roll'){
		// Checks if there are any more arguments after initial "roll"
		if(interaction.options.get('die').value != null){

			// Splits second command into characters
			let dice = interaction.options.get('die').value;
			//console.log(typeof dice[0]);

			if((dice[0] >= '0' && dice[0] <= '9') && dice[1] == "d" && (dice[2] >= '0' && dice[0] <= '9')){
				// Result, that every dice roll is added to
				let result = 0;
				// Type of die that is being rolled
				let dieRoll = dice[2];

				// if string is longer than 3 characters
				if (dice[3] != null){
					// Accounts for die that are > d9
					if(dice[3] >= '0' && dice[3] <= '9') {
						// If a 2 digit number is detected, then characters are joined
						dieRoll = "" + dice[2] + dice[3];
					} else if(dice[3] == '+') {
						// Adds in any additional modifiers
						if (dice[4] >= '0' && dice[4] <= '9') {
							result = result + dice[4];
						}
					}
				}

				for(i=0; i<dice[0]; i++){
					result = result + Math.floor(Math.random() * dieRoll) + 1;
				}

				interaction.reply("rolled a " + result);

			} else {
				interaction.reply("Invalid input. Try again.");
			}
			
		} else{
			// Default roll is 1d6
			let rollDice = () => Math.floor(Math.random() * 6) + 1;
			interaction.reply("rolled a " + rollDice());
		}
	}

});

// Log the bot in using it's token
client.login(process.env.TOKEN).catch((err) => {
    console.log(`Failed to authenticate with Discord network: "${err.message}"`);
});