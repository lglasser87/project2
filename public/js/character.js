$(document).ready(function () {
  //Character Name
  var nameInput = $(".character-name").val().trim();
  //Male/ Female?
  //Avatar (id in <div> for inserting different avatars)
  // var avatar = $("#avatar");
  //Races: human, elf, dwarf, or elf. (make this a checkbox??
  // var raceChosen = $(".character-race");

  $("#nameSubmit").on("click", function(event) {
    // event.preventDefault();

    handleCharacterNameSubmit();
  });
  //On-click event for choosing a different race
  // $(document).on("click", "#character-race-form", handleCharacterRaceFormSubmit);
  //On-click event for deleting any stored characters
  // $(document).on("click", ".delete-character", handleDeleteButtonPress);

  getCharacters();

  function handleCharacterNameSubmit() {
    // Don't do anything if the name field hasn't been filled out
    if (!nameInput) {
      return;
    }
    alert("Character name applied.");
    // Calling the upsertName function and passing in the value of the name input
    upsertCharacter({
      name: nameInput,
      hp: 15,
      ac: 16,
      tohit: 5,
      damage: 8
    });
  }

  function upsertCharacter(characterData) {
    $.post("/api/characters", characterData)
      .then(getCharacters);
  }

  function getCharacters() {
    $.get("/api/characters", function (data) {
      characters = data;
      handleCharacterNameSubmit();
    });
  }

  // Function for handling what happens when the delete button is pressed
  //   function handleDeleteButtonPress() {
  //     var listItemData = $(this).parent("td").parent("tr").data("character");
  //     var id = listItemData.id;
  //     $.ajax({
  //             method: "DELETE",
  //             url: "/api/characters/" + id
  //         })
  //         .then(getCharacters);
  // }

  //FUNCTION FOR CHOOSING A DIFFERENT RACE
  // function handleCharacterRaceFormSubmit(event) {
  //     event.preventDefault();

  //Stats: Stength, Dexterity, Constitution, Intelligence, Wisdom, Charisma. Depends on race chosen.
  //Bio. Depends on race chosen.
  //Img. Depends on race chosen.
  //Function if/else, then upsert & post

  //     //making objects so it's easier to pull integers for rolls
  //     var newHuman = {
  //         strength: 5,
  //         dexterity: 3,
  //         constitution: 3,
  //         intelligence: 4,
  //         wisdom: 4,
  //         charisma: 10,
  //         bio: "",
  //     };
  //     var newElf = {
  //         strength: 5,
  //         dexterity: 3,
  //         constitution: 3,
  //         intelligence: 4,
  //         wisdom: 4,
  //         charisma: 10,
  //         bio: "",
  //     };
  //     var newDwarf = {
  //         strength: 5,
  //         dexterity: 3,
  //         constitution: 3,
  //         intelligence: 4,
  //         wisdom: 4,
  //         charisma: 10,
  //         bio: "",
  //     };
  //     var newCyborg = {
  //         strength: 5,
  //         dexterity: 3,
  //         constitution: 3,
  //         intelligence: 4,
  //         wisdom: 4,
  //         charisma: 10,
  //         bio: "",
  //     };

  //     if (raceChosen === "human") {
  //         $.post("/api/characters", newHuman)
  //             .then(function() {
  //                 var row = $("<div>");
  //                 row.addClass("race");

  //                 row.append("<p> Strength: " + newHuman.strength + " </p>");
  //                 row.append("<p> Dexterity: " + newHuman.dexterity + " </p>");
  //                 row.append("<p> Constitution: " + newHuman.constitution + " </p>");
  //                 row.append("<p> Intelligence: " + newHuman.intelligence + " </p>");
  //                 row.append("<p> Wisdom: " + newHuman.wisdom + " </p>");
  //                 row.append("<p> Charisma: " + newHuman.charisma + " </p>");
  //                 row.append("<p> Bio: " + newHuman.bio + " </p>");

  //                 //upload human avatar img
  //             })
  //     }
  //     else if (raceChosen === "elf") {
  //         $.post("/api/characters", newElf)
  //             .then(function() {
  //                 var row = $("<div>");
  //                 row.addClass("race");

  //                 row.append("<p> Strength: " + newElf.strength + " </p>");
  //                 row.append("<p> Dexterity: " + newElf.dexterity + " </p>");
  //                 row.append("<p> Constitution: " + newElf.constitution + " </p>");
  //                 row.append("<p> Intelligence: " + newHuman.intelligence + " </p>");
  //                 row.append("<p> Wisdom: " + newElf.wisdom + " </p>");
  //                 row.append("<p> Charisma: " + newElf.charisma + " </p>");
  //                 row.append("<p> Bio: " + newElf.bio + " </p>");

  //                 //upload elf avatar img
  //             })
  //     }
  //     else if (raceChosen === "dwarf") {
  //         $.post("/api/characters", newDwarf)
  //             .then(function() {
  //                 var row = $("<div>");
  //                 row.addClass("race");

  //                 row.append("<p> Strength: " + newDwarf.strength + " </p>");
  //                 row.append("<p> Dexterity: " + newDwarf.dexterity + " </p>");
  //                 row.append("<p> Constitution: " + newDwarf.constitution + " </p>");
  //                 row.append("<p> Intelligence: " + newDwarf.intelligence + " </p>");
  //                 row.append("<p> Wisdom: " + newDwarf.wisdom + " </p>");
  //                 row.append("<p> Charisma: " + newDwarf.charisma + " </p>");
  //                 row.append("<p> Bio: " + newDwarf.bio + " </p>");

  //                 //upload dwarf avatar img
  //             })
  //     }
  //     else if (raceChosen === "cyborg") {
  //         $.post("/api/characters", newCyborg)
  //             .then(function() {
  //                 var row = $("<div>");
  //                 row.addClass("race");

  //                 row.append("<p> Strength: " + newCyborg.strength + " </p>");
  //                 row.append("<p> Dexterity: " + newCyborg.dexterity + " </p>");
  //                 row.append("<p> Constitution: " + newCyborg.constitution + " </p>");
  //                 row.append("<p> Intelligence: " + newCyborg.intelligence + " </p>");
  //                 row.append("<p> Wisdom: " + newCyborg.wisdom + " </p>");
  //                 row.append("<p> Charisma: " + newCyborg.charisma + " </p>");
  //                 row.append("<p> Bio: " + newCyborg.bio + " </p>");

  //                 //upload cyborg avatar img
  //             })
  //     };

  // }
})
