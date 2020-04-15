//Start Game!!!
$(document).ready(function () {
  //Character info is pulled from character.html!
  //Character name (okay to use same class in start & character.html?)
  // var nameInput = $(".character-name").val();
  //Character image
  // var avatar = $("#avatar");
  //Character Hit Points
  //Character Armor Class
  // var ac = $("#ac");
  //Character Attack (roll)
  // var tohit = $("#char-damage");
  //Character Damage (roll)
  // var damage = $("#char-damage");
  //Item Name(s)
  // var itemNames = $(".item");
  //Item image(s). If >1 item, use numbers?
  // var itemImg = $("#item");
  //Text (prompt) window
  // var prompt = $("#prompt");
  //Character Decision (input)
  // var input = $(".option");
  //Monster Name
  // var monsterName = $("#monster");
  //Monster Hit Points
  // var monsterHp = $("monster-hp");
  //Monster Damage
  // var monsterDamage = $("#monster-damage");
  //Dice Roll Outcome
  // var diceOutcome = $("#dice-outcome");
  //Dice Button
  // var diceBtn = $("#dice-btn")
  //utilize random number to create dice roll function, then call back with on-click event with each attack
    // Chat (input) box (Phase 2-3)
  // var input = $("#input");

  const textElement = document.getElementById("prompt");
  const inspectBtn = document.getElementById("inspect");
  const interactBtn = document.getElementById("interact");
  const attackBtn = document.getElementById("attack");
  const restartBtn = document.getElementById("restart");
  let playHp = document.getElementById("playHp");
  let monHp = document.getElementById("monHp");
  let playName = document.getElementById("playName");
  var audio = document.getElementById("audio");
  var playBtn = document.getElementById("play");
  var pauseBtn = document.getElementById("pause");

  playBtn.addEventListener("click", function(){ audio.play(); }); 
  pauseBtn.addEventListener("click", function(){ audio.pause(); });


  function startGame() {
    showTextNode("room");
    playName.innerText = player.name;
    playHp.innerText = player.hp;
    monHp.innerText = opponent.hp;
  }

  function restart() {
    showTextNode("room");
  }

  function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex);
    textElement.innerText = textNode.text;

  }

  function selectOption(option) {
    const nextTextNodeId = option;
    if (nextTextNodeId === "victory" || nextTextNodeId === "defeat") {
      restartBtn.disabled = false;
    } else if (nextTextNodeId === "inspect") {
      interactBtn.disabled = false;
    } else if (nextTextNodeId === "interact") {
      attackBtn.disabled = false;
    }

    showTextNode(nextTextNodeId);
  }

  let player = {
    name: "Drizzt",
    hp: 15,
    ac: 16,
    tohit: 5,
    damage: 8
  }

  let opponent = {
    name: "Zombie",
    hp: 5,
    ac: 8,
    tohit: 3,
    damage: 6
  }

  function combat() {
    let playerAttack = toHit(player);
    let playerDamage = damage(player);
    let monsterAttack = toHit(opponent);
    let monsterDamage = damage(opponent);
    let gameMessage = document.getElementById("game-message");
    console.log(playerAttack);
    if (playerAttack >= opponent.ac) {
      gameMessage.innerText = "You scored a hit!"
      opponent.hp -= playerDamage;
      printOpponentHp(opponent);
      if (fightOver(opponent)) {
        showTextNode("victory");
        attackBtn.disabled = true;
      }
    } else {
      gameMessage.InnerText = "Your weapon deflects harmlessly off its tattered armor."
    }
    attackBtn.disabled = true;

    gameMessage.innerText = "Opponent is about to strike!";
    setTimeout(() => {
      console.log(monsterAttack);
      if (monsterAttack >= player.ac) {
        gameMessage.innerText = "The skeleton's bony claws rake your skin painfully!";
        player.hp -= monsterDamage;
        printPlayerHp(player);
        if (fightOver(player)) {
          showTextNode("defeat");
          attackBtn.disabled = true;
        }
      } else {
        gameMessage.innerText = "The creature's claws meet nothing but air as you dodge."
      }
      attackBtn.disabled = false;
    }, 1500)

  }

  function printPlayerHp(unit) {
    playHp.innerText =  unit.hp;
  }

  function printOpponentHp(unit) {
    monHp.innerText = unit.hp;
  }

  function toHit(unit) {
    return Math.floor(Math.random() * 20 + unit.tohit);
  }

  function damage(unit) {
    return Math.floor(Math.random() * unit.damage);
  }

  function fightOver(unit) {
    return unit.hp <= 0
  }


  inspectBtn.addEventListener("click", () => selectOption("inspect"));
  interactBtn.addEventListener("click", () => selectOption("interact"));
  attackBtn.addEventListener("click", () => combat());
  
  let textNodes = [{
    id: "room",
    text: "You descend the dark stairwell, the sounds of water dripping echoing ahead of you. After what seems like hours, the small, descending tunnel opens up into a much larger room. Maybe you should INSPECT the room.",
  },
  {
    id: "inspect",
    text: "You find a Longsword on the ground. This may come in handy, try to INTERACT with it.",
  },
  {
    id: "interact",
    text: "Longsword has been added to inventory. However, as soon as you sheathe your newfound weapon, a bony hand bursts from the ground. You stand frozen in fear as a skeleton claws it's way out of a rapidly widening hole. In the span of a few heartbeats, the undead creature stands before you, its body adorned with the rotted trappings of a former soldier. Without uttering a single sound it clatters toward you aggressively. Defend yourself!",
  },
  {
    id: "victory",
    text: "You have defeated the skeleton and can feel the evil lurking in the chamber dissipate with a bone-chilling wail. Satisified there is nothing left for you to do, you make your way back home.",
    
  },
  {
    id: "defeat",
    text: "Your strength fails you and your vision fades as you crumple to the ground. The sound of a sinister laughter rings in your ears. It is the last sound you hear as your final breath escapes your lips",
    
  },
]

startGame();
restartBtn.addEventListener("click", () => restart());
  //play music upon page load!!!
  // audio.play();
  // $(document).on("click", "button.input", charDecision);
  // $(document).on("click", "button.roll", rollDice);

  //calling functions to get decisions & dice rolls from database?
  // getDecisions();
  // getDiceRolls();
  //also calling functions to pull character, monster, & item info
  // getCharacters();
  // getMonsters();
  // getItems();

  //initialize?

  //Pulling character name from character.html
  // function handleCharacterNameSubmit(event) {
  //     event.preventDefault();
  //     // Don't do anything if the name field hasn't been filled out
  //     if (!nameInput) {
  //       return;
  //     }
  //     // Calling the upsertName function and passing in the value of the name input
  //     upsertName({
  //       name: nameInput
  //     });
  // };

  // function upsertName(characterData) {
  //     $.post("/api/characters", characterData)
  //       .then(getCharacters);
  // };

  //Post new/ more characters (Phase 2-3)
  //Post new/ more monsters (Phase 2-3)
  //Post new/ more items (Phase 2-3)

  // function getCharacters() {
  //     $.get("/api/characters", function(data) {
  //       characters = data;
  //       handleCharacterNameSubmit();
  //     });
  // };

  // function getMonsters() {
  //     $.get("/api/monsters", function(data) {
  //       monsters = data;
  //     });
  // };

  // function getItems() {
  //     $.get("/api/items", function(data) {
  //       items = data;
  //     });
  // };

  // function charDecision() {
  //load prompt (<legend id="prompt">) & options (<input class="option")
  //get character decision from prompt
  //upload new prompt & options
  // };

  // function rollDice() {
  //generate random number for dice roll
  //display number

  //update character stats
  // updateCharStats();

  //update item(s)?
  // updateItemStats();

  //update monster
  // updateMonsterStats();
  // };



});
