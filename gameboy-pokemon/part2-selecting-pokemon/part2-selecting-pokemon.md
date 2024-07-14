## Selecting a Pokemon

### Step 1: Attach Event Listeners to Navigation Buttons

These listeners allow the user to navigate through the Pokemon array using the left and right buttons.

```javascript
// 1. Add a 'click' event listener to the `rightBtnElement` that calls the function `scrollRight` when clicked.
// 2. Add a 'click' event listener to the `leftBtnElement` that calls the function `scrollLeft` when clicked.
```

### Step 2: Define the scrollRight Function

This function increments the pokemonIndex to navigate to the next Pokemon in the array and wraps around to the start if the end is reached.

```javascript
// 1. Define a function called `scrollRight`.
// 2. Increment the global variable `pokemonIndex` by 1 to move to the next Pokemon.
// 3. Check if `pokemonIndex` is greater than or equal to the length of the `pokemons` array.
//    - If true, reset `pokemonIndex` to 0 to wrap back to the beginning of the array.
// 4. Call the function `renderPokemon` (previously defined) to update the display with the new Pokemon.
```

### Step 3: Define the scrollLeft Function

This function decrements the pokemonIndex to navigate to the previous Pokemon in the array and wraps around to the end if the start is reached.

```javascript
// 1. Define a function called `scrollLeft`.
// 2. Decrement the global variable `pokemonIndex` by 1 to move to the previous Pokemon.
// 3. Check if `pokemonIndex` is less than 0.
//    - If true, set `pokemonIndex` to the length of the `pokemons` array minus 1 to wrap back to the last Pokemon in the array.
// 4. Call the function `renderPokemon` (previously defined) to update the display with the new Pokemon.
```

Context and Usage

- These functions (scrollRight and scrollLeft) enable the player to browse through all available Pokemon in the array using the left and right navigation buttons.

- Each time a button is pressed, the respective function adjusts the pokemonIndex and then updates the Pokemon displayed on the screen by calling renderPokemon, which refreshes the display based on the new index.

- The wrapping logic ensures that the navigation is circular, making the list of Pokemon loop infinitely in either direction.

<details>
<summary>
Solution
</summary>

```javascript
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
```

</details>
