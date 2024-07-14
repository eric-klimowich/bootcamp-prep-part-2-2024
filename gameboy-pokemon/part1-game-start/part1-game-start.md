## Let's Get This Game Started

### Step 1: Define the startGame Function

This function is initiated when the 'Start' button is clicked, setting up the game.

```javascript
// 1. Define a function called `startGame`.
// 2. Inside `startGame`, call the function `clearStartScreen` (which will be defined later) to clear any previous content and setup the initial game screen.
// 3. Call the function `renderPokemon` (which will be defined later) to display the first Pokemon on the screen.
// 4. Log the message "SELECT A POKEMON" to the console to prompt user interaction.
// 5. Add an event listener to the `aBtnElement`. This should be a 'click' event and should reference the function `selectPokemon` (which will be defined later).
// 6. Remove the 'click' event listener from the `startBtnElement` to prevent restarting the game without a refresh.
```

### Step 2: Define the clearStartScreen Function

This function prepares the game interface by removing the start message and making the Pokemon container visible.

```javascript
// 1. Define a function called `clearStartScreen`.
// 2. Within `clearStartScreen`, remove the start message element from the document using `startMsgElement.remove()`.
// 3. Remove the 'hidden' class from the `containerElement` to make the Pokemon container visible by manipulating its class list.
```

### Step 3: Attach the Event Listener to the Start Button

Set up the interaction that will trigger the game to start.

```javascript
// 1. Add a 'click' event listener to the `startBtnElement` that calls the `startGame` function when the 'Start' button is clicked.
```

### Step 4: Define the renderPokemon Function

This function updates the UI with the details of the Pokemon based on the current pokemonIndex.

```javascript
// 1. Define a function called `renderPokemon`.
// 2. Inside `renderPokemon`, retrieve the current Pokemon from the `pokemons` array using the global variable `pokemonIndex`.
// 3. Initialize a variable called `imageElement` and select the `img` element nested inside the element with class `pokemon` using the selector ".pokemon img".
// 4. Initialize a variable called `nameElement` and select the `h3` element inside the element with class `pokemon` using the selector ".pokemon h3".
// 5. Initialize a variable called `numberElement` and select the third `p` element inside the element with class `pokemon` using the selector ".pokemon p:nth-child(3)".
// 6. Initialize a variable called `typeElement` and select the fourth `p` element inside the element with class `pokemon` using the selector ".pokemon p:nth-child(4)".
// 7. Initialize variables for selecting elements related to Pokemon stats (`hpElement`, `attackElement`, `defenseElement`, `speedElement`) using similar selectors targeting the respective `p` elements under the `pokemon-stats` class.
// 8. Update each selected HTML element with the respective property from the current Pokemon object (`sprite`, `name`, `number`, `type`, `stats.hp`, `stats.attack`, `stats.defense`, `stats.speed`).
```

<details>
<summary>
Solution
</summary>

```javascript
function startGame() {
  clearStartScreen();
  renderPokemon();

  console.log("SELECT A POKEMON");

  aBtnElement.addEventListener("click", selectPokemon);
  startBtnElement.removeEventListener("click", startGame);
}

function clearStartScreen() {
  startMsgElement.remove();
  containerElement.classList.remove("hidden");
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
```

</details>
