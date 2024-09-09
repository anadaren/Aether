// Registering Slash Commands

// Dependancies
require('dotenv').config();
global.ReadableStream = require('web-streams-polyfill').ReadableStream;
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

// Slash Commands
const commands = [
    {
        name: 'hi',
        description: 'Replies with hello there',
    },
    {
        name: '8-ball',
        description: 'Asks the magic 8-ball a question',
        options: [
            {
                name: 'question',
                description: 'The question',
                type: ApplicationCommandOptionType.String,
                required: true,
            }
        ]
    },
    {
        name: 'roll',
        description: 'Rolls a die',
        options: [
            {
                name: 'die',
                description: 'Which type of die to roll',
                type: ApplicationCommandOptionType.String,
                required: false,
            }
        ]
    }
];

// Registers commands into slash command menu

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registering slash commands...');
        await rest.put(
            Routes.applicationGuildCommands(
                process.env.CLIENT_ID,
                process.env.GUILD_ID
            ),
            { body: commands }
       )
       console.log('Slash commands registered.');
    } catch (error) {
        console.log('There was an error: ' + error);
    }
})();
