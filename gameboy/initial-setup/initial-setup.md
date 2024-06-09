# Initial Setup

Take the time to familiarize yourself with the initial starter code. Understanding the structure of the HTML will help in navigating through the DOM. Below are instructions for your initial setup. Keep in mind, all of your work will go in the `script.js` file. Let's get started!

## Setting Up Selectors

Begin by selecting the HTML elements that will be interacted with throughout the game. This step involves using the document.querySelector method to access elements based on their class or ID. This method returns the first Element within the document that matches the specified selector.

```javascript
// Select the HTML element that displays the initial start message and store in a variable named startMsgElement (hint: id of start-message)

// Select the container that will display the Pokemon details and store in a variable named containerElement (hint: class of pokemon-container)

// Select the battle screen element where the battle interactions will take place and store in a variable named battleScreen (id of battle-screen)

// Select the button that starts the game and store in a variable named startBtnElement (hint: class of start)

// Select the navigation buttons that allow the user to scroll through Pokemon and store in a variable named leftBtnElement and rightBtnElement (hint: class of left and right, respectively).

// Select the action buttons used during the battle and store in a variable named aBtnElement and bBtnElement (hint: class of a and b, respectivley)
```

## Initialize Global Variables

Set up the global variables that will hold important game state information. This includes indices for navigating Pokemon, turn indicators for battle logic, and variables to store player and computer Pokemon data.

```javascript
// Initialize an index (called pokemonIndex) to keep track of the currently selected Pokemon and assign it to the number 0

// Initialize a boolean variable (named isPlayerTurn) to manage whose turn it is in the battle; set to true

// Declare variables to store the player's and computer's Pokemon details (named playerPokemon and computerPokemon). These will be used during battles - no need to initialize it with any value (remain undefined for now)
```

<details>
<summary>
Solution
</summary>

```javascript
const startMsgElement = document.querySelector("#start-message");
const containerElement = document.querySelector(".pokemon-container");
const battleScreen = document.querySelector(".battle-screen");
const startBtnElement = document.querySelector(".start");
const leftBtnElement = document.querySelector(".left");
const rightBtnElement = document.querySelector(".right");
const aBtnElement = document.querySelector(".a");
const bBtnElement = document.querySelector(".b");

let pokemonIndex = 0;
let isPlayerTurn = true;

let playerPokemon, computerPokemon;
```

</details>

## Explanation and Context

**Selectors**: Using document.querySelector is crucial for binding JavaScript logic to HTML elements. By selecting these elements at the beginning of the script, you ensure that all subsequent operations can directly manipulate the game's interface.

**Variables**: Global variables like pokemonIndex and isPlayerTurn help manage game flow and state across different functions without needing to repeatedly pass these values around. The Pokemon variables (playerPokemon and computerPokemon) will later be assigned specific Pokemon objects when the game starts and battles commence.

## Next Steps

After setting up these selectors and variables, the next logical steps in your code would involve initializing the game mechanics (starting the game, navigating Pokemon, selecting a Pokemon for battle), which are handled in separate functions connected to event listeners for button clicks.

This approach ensures a clean, organized start to your script, making it easier to debug and extend as your game develops.
