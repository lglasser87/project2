//Start Game!!!
$(document).ready(function() {
    //Character image
    var charImage = $("#char-image");
    //Text (prompt) window
    var prompt = $("#prompt");
    //Chat (input) box
    var input = $("#input");
    //Character Hit Points
    var hp = $("#hp");
    //Character MP
    var mp = $("#mp");
    //Dice Roll
    var diceRoll = $("#dice-roll");
    //Dice Button
        //utilize random number to create dice roll function, then call back with on-click event with each attack
    var diceBtn = $("#dice-btn");

    $(document).on("click", "button.input", charDecision);
    $(document).on("click", "button.roll", rollDice);

    //get decisions & dice rolls from database?
    getDecisions();
    getDiceRolls();

    //initialize?

    function charDecision() {
        //get character decision from prompt
        //upload new prompt
    };

    function rollDice() {
        //generate random number for dice roll
        //display number
        //display new hp, if decision affects it
        //display new mp, if decision affects it
    };


})

