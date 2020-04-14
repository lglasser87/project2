//Start Game!!!
$(document).ready(function() {
    //Character info is pulled from character.html!
    //Character name (okay to use same class in start & character.html?)
    var nameInput = $(".character-name").val().trim();
    //Character image
    // var avatar = $("#avatar");
    //Character Hit Points
    var hp = $("#char-hp");
    //Character Armor Class
    var ac = $("#ac");
    //Character Damage (roll)
    var charDamage = $("#char-damage");
    //Item Name(s)
    var itemNames = $(".item");
    //Item image(s). If >1 item, use numbers?
    var itemImg = $("#item");
    //Text (prompt) window
    var prompt = $("#prompt");
    //Character Decision (input)
    var input = $(".option");
    //Monster Name
    var monsterName = $("#monster");
    //Monster Hit Points
    var monsterHp = $("monster-hp");
    //Monster Damage
    var monsterDamage = $("#monster-damage");
    //Dice Roll Outcome
    var diceOutcome = $("#dice-outcome");
    //Dice Button
    var diceBtn = $("#dice-btn")
        //utilize random number to create dice roll function, then call back with on-click event with each attack
    //Music! is file path correct?
    var audio = new Audio("../mp3/dnd-theme.mp3");
    //Chat (input) box (Phase 2-3)
    // var input = $("#input");

    //play music upon page load!!!
    audio.play();
    $(document).on("click", "button.input", charDecision);
    $(document).on("click", "button.roll", rollDice);

    //calling functions to get decisions & dice rolls from database?
    getDecisions();
    getDiceRolls();
    //also calling functions to pull character, monster, & item info
    getCharacters();
    getMonsters();
    getItems();

    //initialize?

    //Pulling character name from character.html
    function handleCharacterNameSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name field hasn't been filled out
        if (!nameInput) {
          return;
        }
        // Calling the upsertName function and passing in the value of the name input
        upsertName({
          name: nameInput
        });
    };

    function upsertName(characterData) {
        $.post("/api/characters", characterData)
          .then(getCharacters);
    };

    //Post new/ more characters (Phase 2-3)
    //Post new/ more monsters (Phase 2-3)
    //Post new/ more items (Phase 2-3)

    function getCharacters() {
        $.get("/api/characters", function(data) {
          characters = data;
          handleCharacterNameSubmit();
        });
    };

    function getMonsters() {
        $.get("/api/monsters", function(data) {
          monsters = data;
        });
    };

    function getItems() {
        $.get("/api/items", function(data) {
          items = data;
        });
    };

    function charDecision() {
        //load prompt (<legend id="prompt">) & options (<input class="option")
        //get character decision from prompt
        //upload new prompt & options
    };

    function rollDice() {
        //generate random number for dice roll
        //display number

        //update character stats
        updateCharStats();

        //update item(s)?
        updateItemStats();
        
        //update monster
        updateMonsterStats();
    };


})

