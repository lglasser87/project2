$(document).ready(function() {
    //Name
    //Male/ Female?
    //Race: human, elf, dwarf, or elf. Make this a checkbox?
    var nameInput = $("#character-name");
    var raceChosen = $("#character-race");

    $(document).on("submit", "#character-name-form", handleCharacterFormSubmit);
    $(document).on("click", "#character-race-form", handleCharacterRaceFormSubmit);

    getCharacters();

    function handleCharacterFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name field hasn't been filled out
        if (!nameInput.val().trim().trim()) {
          return;
        }
        // Calling the upsertName function and passing in the value of the name input
        upsertName({
          name: nameInput
            .val()
            .trim()
        });
    }

    function upsertName(characterData) {
        $.post("/api/characters", characterData)
          .then(getCharacters);
    }

    function getCharacters() {
        $.get("/api/characters", function(data) {
          characters = data;
          handleCharacterFormSubmit();
        });
      }

    //Stats: Stength, Dexterity, Constitution, Intelligence, Wisdom, Charisma. Depends on race chosen.
    //Bio. Depends on race chosen.
    //function if/else, then upsert & post
    function handleCharacterRaceFormSubmit(event) {
        event.preventDefault();

        //making objects so it's easier to pull integers for rolls
        var newHuman = {
            strength: 5,
            dexterity: 3,
            constitution: 3,
            intelligence: 4,
            wisdom: 4,
            charisma: 10,
            bio: "",
        };
        var newElf = {
            strength: 5,
            dexterity: 3,
            constitution: 3,
            intelligence: 4,
            wisdom: 4,
            charisma: 10,
            bio: "",
        };
        var newDwarf = {
            strength: 5,
            dexterity: 3,
            constitution: 3,
            intelligence: 4,
            wisdom: 4,
            charisma: 10,
            bio: "",
        };
        var newCyborg = {
            strength: 5,
            dexterity: 3,
            constitution: 3,
            intelligence: 4,
            wisdom: 4,
            charisma: 10,
            bio: "",
        };

        if (raceChosen === "human") {
            $.post("/api/characters", newHuman)
                .then(function() {
                    var row = $("<div>");
                    row.addClass("race");

                    row.append("<p> Strength: " + newHuman.strength + " </p>");
                    row.append("<p> Dexterity: " + newHuman.dexterity + " </p>");
                    row.append("<p> Constitution: " + newHuman.constitution + " </p>");
                    row.append("<p> Intelligence: " + newHuman.intelligence + " </p>");
                    row.append("<p> Wisdom: " + newHuman.wisdom + " </p>");
                    row.append("<p> Charisma: " + newHuman.charisma + " </p>");
                    row.append("<p> Bio: " + newHuman.bio + " </p>");
                })
        };
        else if (raceChosen === "elf") {
            $.post("/api/characters", newElf)
                .then(function() {
                    var row = $("<div>");
                    row.addClass("race");

                    row.append("<p> Strength: " + newElf.strength + " </p>");
                    row.append("<p> Dexterity: " + newElf.dexterity + " </p>");
                    row.append("<p> Constitution: " + newElf.constitution + " </p>");
                    row.append("<p> Intelligence: " + newHuman.intelligence + " </p>");
                    row.append("<p> Wisdom: " + newElf.wisdom + " </p>");
                    row.append("<p> Charisma: " + newElf.charisma + " </p>");
                    row.append("<p> Bio: " + newElf.bio + " </p>");
                })
        };
        else if (raceChosen === "dwarf") {
            $.post("/api/characters", newDwarf)
                .then(function() {
                    var row = $("<div>");
                    row.addClass("race");

                    row.append("<p> Strength: " + newDwarf.strength + " </p>");
                    row.append("<p> Dexterity: " + newDwarf.dexterity + " </p>");
                    row.append("<p> Constitution: " + newDwarf.constitution + " </p>");
                    row.append("<p> Intelligence: " + newDwarf.intelligence + " </p>");
                    row.append("<p> Wisdom: " + newDwarf.wisdom + " </p>");
                    row.append("<p> Charisma: " + newDwarf.charisma + " </p>");
                    row.append("<p> Bio: " + newDwarf.bio + " </p>");
                })
        };
        else if (raceChosen === "cyborg") {
            $.post("/api/characters", newCyborg)
                .then(function() {
                    var row = $("<div>");
                    row.addClass("race");

                    row.append("<p> Strength: " + newCyborg.strength + " </p>");
                    row.append("<p> Dexterity: " + newCyborg.dexterity + " </p>");
                    row.append("<p> Constitution: " + newCyborg.constitution + " </p>");
                    row.append("<p> Intelligence: " + newCyborg.intelligence + " </p>");
                    row.append("<p> Wisdom: " + newCyborg.wisdom + " </p>");
                    row.append("<p> Charisma: " + newCyborg.charisma + " </p>");
                    row.append("<p> Bio: " + newCyborg.bio + " </p>");
                })
        };

    }


    //Start button, link to start.js  
})
