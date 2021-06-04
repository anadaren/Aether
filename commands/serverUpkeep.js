module.exports = function (message, args) {

        // Prints your user ID
        if(args[0] === "userinfo"){
            message.reply("Coming soon.");
        }

        // Prints Server Info
        if(args[0] === "serverinfo"){
            message.channel.send("Coming soon.");
            // message.channel.send(name, region, memberCount, list of roles, iconurl)
        }

        // Self Assign Roles
        

        // Kick Mute and Ban users


}