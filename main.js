// Aether
// Discord Bot, written in Javascript
// Created by anadaren


// Imports the discord.js module, saves it as Discord for ease of use
const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client();
// Requires configuration file
const config = require("./config.json")
// Reqires file with login token, comment out before posting anywhere
//require("dotenv").config();


// Prints to console when first online
client.on("ready", () => {
    // prints name
	console.log("Connected as " + client.user.tag)
	
	client.user.setActivity("Minecraft");
	// client.user.setActivity("Tiktok", {type: "WATCHING"})
    // ^^^Line for changing type of activity (default is "PLAYING")
});

// Commands
const commandHandler = require("./commands")
client.on("message", commandHandler);

// Log the bot in using it's token
client.login(process.env.DiscordJS_Token);
