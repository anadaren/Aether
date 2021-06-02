// Aether
// Discord Bot, written in Javascript
// Created by anadaren


// CONSTANTS //

// Imports the discord.js module, saves it as Discord for ease of use
const Discord = require('discord.js');
// Create an instance of a Discord client
const client = new Discord.Client();
// Recognizes command prefixes that will be used to call the bot
const PREFIX = "a!";



// Prints to console when first online
client.on('ready', () => {
    // prints name
	console.log("Connected as " + client.user.tag)
	
	client.user.setActivity("Minecraft");
	// client.user.setActivity("Tiktok", {type: "WATCHING"})
    // ^^^Line for changing type of activity (default is "PLAYING")
});


// How the bot handles commands being said in the chat

// Bot takes in any command that begins with it's defined prefix,
// converts command all to lowercase, and checks if command exists
// if so, carries out command
const isValidCommand = (message, cmdName) => message.content.toLowerCase().startsWith(PREFIX + cmdName);

client.on('message', message => {
	// Keeps the bot from saying something that will call itself
	if(message.author.bot) return;
		
	/*Passive Commands*/
	
	// Flags users for slurs/other blacklisted words
    // Deletes the offending message, lets user off with an (aggressive) warning
	let blacklisted = [/*put in blacklisted words*/];
	for(var i in blacklisted){
        if(message.content.toLowerCase().includes(blacklisted[i]))
        {
            message.delete();
            message.reply("Don't say that, asshole");
        }
	}

    // Checks if anyone is referring to them without talking to them directly
    if(message.content.toLowerCase().includes('aether'))
    {
        message.channel.send("Don't refer to me");
    }
	/*Active Commands*/

	//Says hello
	if(message.content === "hi Aether"){
		message.channel.send("Don't talk to me");
		//message.reply("Reply");
        // ^^^Replies @ the original sender
	}
		
	// Says hello, but this time Aether is much nicer because you did it right
	if(isValidCommand(message, "hello")){
		message.reply("Hello");
	}
		
    // Prints your user ID
    /*if(isValidCommand(message, "userinfo")){

    }*/

    // Self Assign Roles

    // Kick Mute and Ban users

    // Prints Diceroll when asked
    // Default roll is 1d6
	if(isValidCommand(message, "roll")){
        const rollDice = () => Math.floor(Math.random() * 6) + 1;
		message.reply("rolled a " + rollDice());
	}

    // Magic 8-Ball Feature
    // List of responses
    const eightBall = [
        'Looks likely',
        'Sure, with that attitude, you can trick yourself into anything',
        'Im busy, figure it out yourself.',
        'Depends on how legal you want the solution to be',
        'Looks--oh. Oh dear. Thats not good. Best ask again...',
        'I dont like your tone, so Im going to say no. Hope that helps<3',
        'No'
    ]
    // Picks random response
    const eightReply = Math.floor(Math.random() * eightBall.length);
    // Prints response if a question is asked
    if (isValidCommand(message, "?")){
        message.channel.send(eightBall[eightReply]);
    }


    // Thank you response
    if (isValidCommand(message, "Thank you") || isValidCommand(message, "Thanks")){
        message.channel.send("You're welcome. XOXO, kisses<3");
    }

    // Sends a stock Reply when you talk to them but no specific reply
    // FIXME: When would u call this
    // List of random replies that Aether can say
    const replies = [
        'Hello',
        'Good evening dears',
        'Kisses',
        'Love you all, except for the ones I dont :|'
    ]
    //const replyIndex = Math.floor(Math.random() * replies.length);
    //message.channel.send(replies[replyIndex])
	
});

// Log the bot in using it's token
client.login(process.env.DiscordJS_Token);
