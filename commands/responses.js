module.exports = function (message, args) {

    // Checks if anyone is referring to them without talking to them directly
    if(message.content.toLowerCase().includes("aether")){
        //Says hello
        if(message.content === "hi Aether"){
                message.channel.send("Don't talk to me");
        }
        else{
            message.channel.send("Don't refer to me");
        }
    }  

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

};