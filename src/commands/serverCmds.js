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
        if(args[0] === "addroll") {
            if(args[1] != "The King" || args[1] != "Mod"){
                message.member.roles.add('args[1]').catch(console.error);
                message.reply("args[1] role added.");
            }
        }
        if(args[0] === "removeroll") {
            message.member.roles.remove('args[1]').catch(console.error);
            message.reply("args[1] role removed.");
        }

        // checks if member has role
        //if(message.member.roles.cache.has('')){} // .some(r => r.name === "")

        // the king role id: 327503735981080580
        // mod role id: 787837493105000508


        // Kick Mute and Ban users


}