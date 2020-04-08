$(document).ready(function() {
    //Name
    //Race: human, elf, dwarf, or elf
    var nameInput = $("#character-name-input");
    var race = $("#character-race");

    $(document).on("submit", "#character-name-form", handleCharacterFormSubmit);
    $(document).on("click", "#character-race-form", handleCharacterRaceFormSubmit);

    function handleCharacterFormSubmit(event) {
        event.preventDefault();
        // Don't do anything if the name field hasn't been filled out
        if (!nameInput.val().trim().trim()) {
          return;
        }
        // Calling the upsertName function and passing in the value of the name input
        upsertAuthor({
          name: nameInput
            .val()
            .trim()
        });
    }


    //Stats: Stength, Dexterity, Constitution, Intelligence, Wisdom, Charisma. Depends on race chosen.
    //Bio. Depends on race chosen.
    //Start button, link to start.js  
})
