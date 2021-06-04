module.exports = function (message, args) {
        // Magic 8-Ball Feature
        // List of responses
        const eightBall = [
            "Looks likely",
            "Sure, with that attitude, you can trick yourself into anything",
            "I'm busy, figure it out yourself.",
            "Depends on how legal you want the solution to be",
            "Looks--oh. Oh dear. Thats not good. Best ask again...",
            "I don't like your tone, so Im going to say no. Hope that helps<3",
            "No"
        ]
        // Picks random response
        const eightReply = Math.floor(Math.random() * eightBall.length);
        // Prints response if a question is asked
        message.channel.send(eightBall[eightReply]);

}