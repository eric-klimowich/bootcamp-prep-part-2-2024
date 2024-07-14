const startMsgElement = document.querySelector("#start-message");
const containerElement = document.querySelector(".pokemon-container");
const battleScreen = document.querySelector(".battle-screen");
const startBtnElement = document.querySelector(".start");
const leftBtnElement = document.querySelector(".left");
const rightBtnElement = document.querySelector(".right");
const aBtnElement = document.querySelector(".a");
const bBtnElement = document.querySelector(".b");

let pokemonIndex = 0;

const pokemons = [
  {
    number: 25,
    name: "Pikachu",
    type: "Electric",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      speed: 90,
    },
  },
  {
    number: 1,
    name: "Bulbasaur",
    type: "Grass",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      speed: 45,
    },
  },
  {
    number: 4,
    name: "Charmander",
    type: "Fire",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      speed: 65,
    },
  },
  {
    number: 7,
    name: "Squirtle",
    type: "Water",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    stats: {
      hp: 44,
      attack: 48,
      defense: 65,
      speed: 43,
    },
  },
  {
    number: 16,
    name: "Pidgey",
    type: "Flying",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    stats: {
      hp: 40,
      attack: 45,
      defense: 40,
      speed: 56,
    },
  },
  {
    number: 19,
    name: "Rattata",
    type: "NYC Subway Rat",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    stats: {
      hp: 30,
      attack: 56,
      defense: 35,
      speed: 72,
    },
  },
];

// Start Game (Part 1)
function startGame() {
  clearStartScreen(); // clear previous content inside of screen
  renderPokemon(); // generate new pokemon
  // TBU - msg to select a pokemon
  console.log("SELECT A POKEMON");
  aBtnElement.addEventListener("click", selectPokemon); // For part 3, add click event to pokemon select
  startBtnElement.removeEventListener("click", startGame); // remove event listener to prevent pressing start again
}

function clearStartScreen() {
  startMsgElement.remove(); // remove start message
  containerElement.classList.remove("hidden"); // display pokemon-container
}

startBtnElement.addEventListener("click", startGame);

function renderPokemon() {
  const pokemon = pokemons[pokemonIndex];

  // Select all relevant HTML elements
  const imageElement = document.querySelector(".pokemon img");
  const nameElement = document.querySelector(".pokemon h3");
  const numberElement = document.querySelector(".pokemon p:nth-child(3)");
  const typeElement = document.querySelector(".pokemon p:nth-child(4)");
  const hpElement = document.querySelector(".pokemon-stats p:nth-child(2)");
  const attackElement = document.querySelector(".pokemon-stats p:nth-child(3)");
  const defenseElement = document.querySelector(
    ".pokemon-stats p:nth-child(4)"
  );
  const speedElement = document.querySelector(".pokemon-stats p:nth-child(5)");

  // Update each HTML element with Pokemon data
  imageElement.src = pokemon.sprite;
  imageElement.alt = pokemon.name;
  nameElement.textContent = pokemon.name;
  numberElement.textContent = `No. ${pokemon.number}`;
  typeElement.textContent = `Type: ${pokemon.type}`;
  hpElement.textContent = `HP: ${pokemon.stats.hp}`;
  attackElement.textContent = `Attack: ${pokemon.stats.attack}`;
  defenseElement.textContent = `Defense: ${pokemon.stats.defense}`;
  speedElement.textContent = `Speed: ${pokemon.stats.speed}`;
}

// Select Pokemon (Part 2)
rightBtnElement.addEventListener("click", scrollRight);
leftBtnElement.addEventListener("click", scrollLeft);

function scrollRight() {
  pokemonIndex++;
  if (pokemonIndex >= pokemons.length) {
    pokemonIndex = 0; // reset back to beginning of the pokemons array
  }
  renderPokemon();
}

function scrollLeft() {
  pokemonIndex--;
  if (pokemonIndex < 0) {
    pokemonIndex = pokemons.length - 1; // index of last pokemon
  }
  renderPokemon();
}

// Select Pokemon to Start Battle (Part 3)
function selectPokemon() {
  rightBtnElement.removeEventListener("click", scrollRight);
  leftBtnElement.removeEventListener("click", scrollLeft);

  // TBU - msg saying pokemon selected, battle will begin
  console.log(`${pokemons[pokemonIndex].name} - I CHOOSE YOU!`);

  aBtnElement.removeEventListener("click", selectPokemon);
  displayBattleScreen();
}

let playerPokemon;
let computerPokemon;

function displayBattleScreen() {
  // Player's Pokemon
  playerPokemon = pokemons[pokemonIndex];

  // Computer's Pokemon (randomly selected)
  computerPokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

  // Select Player HTML Elements
  const playerImage = document.querySelector(".player img");
  const playerHpProgress = document.querySelector("#player-hp");

  // Update Player Elements
  playerImage.src = playerPokemon.sprite;
  playerImage.alt = playerPokemon.name;
  playerHpProgress.value = playerPokemon.stats.hp;
  playerHpProgress.max = playerPokemon.stats.hp;

  // Select Computer HTML Elements
  const computerImage = document.querySelector(".computer img");
  const computerHpProgress = document.querySelector("#computer-hp");

  // Update Computer Elements
  computerImage.src = computerPokemon.sprite;
  computerImage.alt = computerPokemon.name;
  computerHpProgress.value = computerPokemon.stats.hp;
  computerHpProgress.max = computerPokemon.stats.hp;

  // Remove Pokemon Select Screen and Show Battle Screen
  containerElement.classList.add("hidden");
  battleScreen.classList.remove("hidden");

  // Event listeners for buttons
  aBtnElement.addEventListener("click", function () {
    playerAction("attack");
  });
  bBtnElement.addEventListener("click", function () {
    playerAction("defend");
  });
}

// Time to Battle! (Part 4)
let isPlayerTurn = true; // Player starts the first turn

function attack(targetPokemon, targetProgress, damage) {
  // Calculate new HP after attack
  targetPokemon.stats.hp -= damage;

  // Update the HTML progress bar
  targetProgress.value = targetPokemon.stats.hp;

  if (targetPokemon.stats.hp <= 0) {
    console.log(targetPokemon.name + " has been defeated!");
    return true; // Return true if the Pokemon is defeated
  }
  return false; // Return false if the Pokemon is still alive
}

function playerAction(action) {
  if (!isPlayerTurn) return; // If it's not the player's turn, do nothing

  const computerHpProgress = document.querySelector("#computer-hp");
  const damage = Math.floor(Math.random() * 11); // Random damage between 0 and 10

  if (action === "attack") {
    console.log("Player turn: Attacking!");
    const isDefeated = attack(computerPokemon, computerHpProgress, damage);
    if (isDefeated) {
      console.log("The battle is over. Player wins!");
      return;
    }
  } else if (action === "defend") {
    console.log("Player turn: Defending!");
    const reducedDamage = damage * 0.25;
    const isDefeated = attack(
      computerPokemon,
      computerHpProgress,
      reducedDamage
    );
    if (isDefeated) {
      console.log("The battle is over. Player wins!");
      return;
    }
  }

  isPlayerTurn = false; // Switch turn to computer
  setTimeout(computerTurn, 1000); // Computer takes a turn after 1 second
}

function computerTurn() {
  const playerHpProgress = document.querySelector("#player-hp");
  const damage = Math.floor(Math.random() * 11); // Random damage between 0 and 10

  console.log("Computer turn: Attacking!");
  const isDefeated = attack(playerPokemon, playerHpProgress, damage);
  if (isDefeated) {
    console.log("The battle is over. Computer wins!");
    return;
  }

  isPlayerTurn = true; // Switch turn back to player
}
