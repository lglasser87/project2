function attackRoll(opponent) {
    let currentTurn = true;
    // Die roller d20 engine

    // Checks to see if roll is greater than AC
    if(result >= opponent.AC) {
        dmg = damageRoll(opponent);
        console.log("The weapon strikes true for " + dmg + "points of damge!")
        
        // checks to see if the opponent is alive
        isAlive(opponent);

        // set current turn counter to false.
        currentTurn = false;

        // if isAlive(monster) is true keep the fight going. If isAlive(player) is false the game ends and a restart screen pops up.
    }
};

function damageRoll(opponent) {
    // Die roller factoring in the damage dice of the equiped weapon
    dmg = // Die roller API
    opponent.HP -= this.dmg;
    return 
}

function isAlive() {
    if (this.HP > 0) {
        console.log(this.name + "Is still standing")
        return true
    }
    console.log(this.name + " has been defeated!")
    return false;
}