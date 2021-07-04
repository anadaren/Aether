// Roll Dice Function

module.exports = function (message, args) {
    // Checks if there are any more arguments after initial "roll"
    if(args[0] != null){

        // Splits second command into characters
        let dice = arges[0].split(" ").join("");

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
            } elseif(dice[3] == '+'){
                // Adds in any additional modifiers
                if (dice[4] >= '0' && dice[4] <= '9') {
                    result = result + dice[4];
                }
            }
        }

        for(for i=0; i<dice[0]; i++){
            result = result + Math.floor(Math.random() * dieRoll) + 1;
        }
        if()
        message.reply("rolled a " + result);

    } else{
        // Default roll is 1d6
        let rollDice = () => Math.floor(Math.random() * 6) + 1;
        message.reply("rolled a " + rollDice());
    }
}