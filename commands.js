// Requires prefix from config.json file
//const prefix = require('./config.json');

// Responses to messages that don't begin with the a! prefix
const responses = require("./commands/responses.js");
// Dice rolls
const roll = require("./commands/roll.js");
// 8-ball feature
const eightball = require("./commands/eightball.js");
// Music commands
// Server related commands


// Command lookup table
const commandLookup = {
    responses,
    roll,
    eightball
    /*music*/
}


module.exports = async function (message){
    // Keeps itself (or any other bot) from saying something that will call itself
	if(message.author.bot) return;

    /* How the bot handles commands being said in the chat*/

    // Bot takes in any command, and splits it up into tokens
    // It then takes the first token in the command, and checks to make sure that it is the prefix
    // It then shifts the array to get rid of the prefix
    // if so, sends the original message and the tokens along to the appropriate function
    //  And carries out command
    let tokens = message.content.split(" ")
    if (tokens[0] === "a!"){
        // Valid commands that start with the a! prefix go in here

        // Removes prefix
        tokens.shift();
        
        // Command sorted into Command Lookup Table
        let command = tokens.shift();
        commandLookup[command](message, tokens);
    } else{
        commandLookup["responses"](message, tokens);
    }
}