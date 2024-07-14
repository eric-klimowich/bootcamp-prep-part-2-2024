## To Battle!

Let's break down the process of selecting a Pokemon to start the battle and setting up the battle screen. This involves finalizing the player's choice, preparing the battle UI, and managing interactions during the battle.

### Step 1: Define the selectPokemon Function

This function handles the event where a player selects their Pokemon and prepares to start the battle.

```javascript
// 1. Define a function called `selectPokemon`.
// 2. Remove the 'click' event listener from `rightBtnElement` to disable right navigation during the battle.
// 3. Remove the 'click' event listener from `leftBtnElement` to disable left navigation during the battle.
// 4. Log a confirmation message to the console indicating which Pokemon has been chosen, using the global variable `pokemonIndex` to access the Pokemon's name.
// 5. Remove the 'click' event listener from `aBtnElement` to disable re-selecting a Pokemon.
// 6. Call the function `displayBattleScreen` (which will be defined later) to setup the UI for the battle stage.
```

### Step 2: Define the displayBattleScreen Function

This function sets up the battle screen by displaying the selected player Pokemon and a randomly selected computer Pokemon. It also prepares the UI for the battle.

```javascript
// 1. Define a function called `displayBattleScreen`.
// 2. Assign the Pokemon at `pokemonIndex` from the `pokemons` array to `playerPokemon`.
// 3. Randomly select a Pokemon from the `pokemons` array and assign it to `computerPokemon`. Use `Math.floor` and `Math.random` multiplied by the length of the `pokemons` array to get a random index.
// 4. Initialize a variable called `playerImage` and select the image element for the player using the selector ".player img".
// 5. Initialize a variable called `playerHpProgress` and select the progress bar element for the player's HP using the selector "#player-hp".
// 6. Update the player's image source and alt text with the `sprite` and `name` from `playerPokemon`.
// 7. Set the value and max attributes of `playerHpProgress` to the HP of `playerPokemon`.
// 8. Initialize a variable called `computerImage` and select the image element for the computer using the selector ".computer img".
// 9. Initialize a variable called `computerHpProgress` and select the progress bar element for the computer's HP using the selector "#computer-hp".
// 10. Update the computer's image source and alt text with the `sprite` and `name` from `computerPokemon`.
// 11. Set the value and max attributes of `computerHpProgress` to the HP of `computerPokemon`.
// 12. Add the 'hidden' class to `containerElement` to hide the Pokemon selection screen.
// 13. Remove the 'hidden' class from `battleScreen` to display the battle UI.
// 14. Add a 'click' event listener to `aBtnElement` to handle player attacks when 'A' is pressed. Reference a function `playerAction` with the argument "attack" (which will be defined later).
// 15. Add a 'click' event listener to `bBtnElement` to handle player defense when 'B' is pressed. Reference a function `playerAction` with the argument "defend" (which will be defined later).
```

These steps provide an outline on how to transition from selecting a Pokemon to initiating a battle.

<details>
<summary>
Solution
</summary>

```javascript
function selectPokemon() {
  rightBtnElement.removeEventListener("click", scrollRight);
  leftBtnElement.removeEventListener("click", scrollLeft);

  console.log(`${pokemons[pokemonIndex].name} - I CHOOSE YOU!`);

  aBtnElement.removeEventListener("click", selectPokemon);
  displayBattleScreen();
}

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
```

</details>
