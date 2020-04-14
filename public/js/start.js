//Start Game!!!
$(document).ready(function() {
    //Character image
    var avatar = $("#avatar");
    //Monster Stats
    var monster = $("#monster");
    //Items
    var items = $(".item");
    //Text (prompt) window
    var prompt = $("#prompt");
    //Chat (input) box
    // var input = $("#input");
    //Character Hit Points
    var hp = $("#char-hp");
    //Character MP
    var ac = $("#ac");
    //Dice Roll
    var diceRoll = $("#dice-roll");
    //Dice Button
        //utilize random number to create dice roll function, then call back with on-click event with each attack
    var diceBtn = $("#dice-btn");

    //play music upon page load!!!
    $(document).on("click", "button.input", charDecision);
    $(document).on("click", "button.roll", rollDice);

    //get decisions & dice rolls from database?
    getDecisions();
    getDiceRolls();

    //initialize?

    function charDecision() {
        //load prompt (<legend>) & options (<input> and <label>)
        //get character decision from prompt
        //upload new prompt & options
        //display new hp, if decision affects it
        //display new mp, if decision affects it
        //update monster
    };

    function rollDice() {
        //generate random number for dice roll
        //display number
        //display new hp, if decision affects it
        //display new mp, if decision affects it
    };


})

