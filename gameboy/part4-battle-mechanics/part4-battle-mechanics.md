## Battle Mechanics

Almost there! Let's break down the final section of the code that handles the battle mechanics. This part includes defining functions for player and computer actions during the battle and managing the turn-based system.

### Step 1: Define the attack Function

This function performs an attack, calculates damage, and updates the HP of the target Pokemon.

```javascript
// 1. Define a function called `attack` with parameters `targetPokemon`, `targetProgress`, and `damage`.
// 2. Subtract the value of `damage` from the `hp` property of `targetPokemon.stats`.
// 3. Update the `value` attribute of `targetProgress` to the new HP value of `targetPokemon`.
// 4. Check if the HP of `targetPokemon` is less than or equal to 0.
//    - If true, log a message stating that `targetPokemon` has been defeated and return true indicating the Pokemon is defeated.
//    - If false, return false indicating the Pokemon is still alive.
```

### Step 2: Define the playerAction Function

This function handles the player's actions during their turn, allowing them to choose to attack or defend.

```javascript
// 1. Define a function called `playerAction` with the parameter `action`.
// 2. Check if it's not the player's turn (use `isPlayerTurn` variable). If true, exit the function without doing anything.
// 3. Initialize a variable called `computerHpProgress` and select the HTML element for the computer's HP progress bar using the selector "#computer-hp".
// 4. Generate a random damage number between 0 and 10 using `Math.floor(Math.random() * 11)`.
// 5. Check the value of `action`:
//    - If "attack", log "Player turn: Attacking!" to the console. Call the `attack` function passing `computerPokemon`, `computerHpProgress`, and the damage value. Check if the attack resulted in defeating the computer.
//    - If "defend", log "Player turn: Defending!" to the console. Calculate reduced damage (damage * 0.25) and call the `attack` function passing `computerPokemon`, `computerHpProgress`, and the reduced damage. Check if the attack resulted in defeating the computer.
// 6. If the Pokemon is defeated in either case, log "The battle is over. Player wins!" and exit the function.
// 7. If the Pokemon is not defeated, set `isPlayerTurn` to false and use `setTimeout` to call `computerTurn` after 1 second, giving the computer a turn to respond.
```

### Step 3: Define the computerTurn Function

This function manages the computer's actions during its turn.

```javascript
// 1. Define a function called `computerTurn`.
// 2. Initialize a variable called `playerHpProgress` and select the HTML element for the player's HP progress bar using the selector "#player-hp".
// 3. Generate a random damage number between 0 and 10 using `Math.floor(Math.random() * 11)`.
// 4. Log "Computer turn: Attacking!" to the console.
// 5. Call the `attack` function passing `playerPokemon`, `playerHpProgress`, and the damage value. Check if the attack resulted in defeating the player.
// 6. If the player is defeated, log "The battle is over. Computer wins!" and exit the function.
// 7. If the player is not defeated, set `isPlayerTurn` to true, giving control back to the player for the next turn.
```

You did it! We have now implemented the turn-based battle mechanics into the game, detailing every action, calculation, and condition involved in the battle process.

<details>
<summary>
Solution
</summary>

```javascript
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
```

</details>
