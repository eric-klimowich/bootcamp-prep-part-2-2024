# Conditionals

## Learning Objectives

By the end of this lesson, you'll be able to:

* Create conditional statements to control the flow of your program.

## Conditionals in Programming

When it comes to conditionals, a computer isn’t all that different from a human brain.

We write conditionals in the form of `if` statements that tell the computer to execute or skip a certain code block if the comparison comes out to be `true`.

```javascript
if (assignmentsCompleted > .80) {
    console.log("Ready to graduate!");
}
```

In plain English, this is saying: “If the assignments completed are over 80%, then tell us, ‘Ready to graduate!’”.

## Breaking Down Conditionals</h1>

Let’s break down the parts of an `if` statement:

* First, we have the `if` keyword to signal a comparison coming up.
* Then, the comparison goes inside the parentheses.
* If the comparison evaluates to `true`, the code block inside the curly braces will execute.

![Parts of an 'if' statement](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/if-statement.png)

## Knowledge Check

Let’s look back at our morning routine decisions:
* “If the `temperature` is below 60 degrees, wear a coat.”
* “If it’s `raining`, bring an umbrella.”

How would you write these as conditional statements in JavaScript? (Hint: Use a `console.log` to output what you should do in each situation.)

<details>
    <summary>Reveal Our Answers</summary>
    
    Here’s how we did it:

```js
if (temperature < 60) {
    console.log("Wear a coat!");
}

if (weather === "raining") {
    console.log("Bring an umbrella!");
}
```

</details>

## Adding More Conditionals

So far, our `if` statements are limited. Something only happens when the comparison is `true`. But what about when it’s `false`? 

Conditional statements can be extended with an `else` block, which gives the computer something else to do if the conditional comes out to be `false`. 

In this example, it’s simply telling JavaScript, “If the assignments completed are NOT greater than 80%, tell us, ‘Better catch up on your homework!’”.

```javascript
if (assignmentsCompleted > .80) {
    console.log("Ready to graduate!");
} else {
    console.log("Better catch up on your homework!");
}
```

## Conditions on Conditions on Conditions

Conditionals don’t stop there. If you need a conditional to check for more than two possibilities, you can add more comparisons to create an `if ... else if ... else` chain, as shown below. The first conditional that turns out to be `true` is executed, and the rest of the chain is skipped entirely:

```javascript
if (assignmentsCompleted > .80) {
    console.log("Ready to graduate!");
} else if (assignmentsCompleted > .65) {
   console.log("Better catch up on your homework!");
} else {
    console.log("You’ve got a lot of work left to do.");
}
```

## Yes, Even More Conditions

If you saw `if... else if` chains and thought that was a lot, hold on to your seat, because we ain’t done yet. You can make your conditions even more complex by adding `if... else` statements and nesting your conditionals.

For example, choosing what to wear might entail a decision tree that considers more than just the temperature and whether or not it’s raining. Here’s how you could make that happen:

```javascript
if (temperature < 60) {
    if (weather === "raining") {
        console.log("It's cold and raining. Time for a heavy rain jacket.");
    } else if (weather === "snowing") {
        console.log("It's cold and snowing. Get out the parka.");
    } else {
        console.log("It's cold and clear. Feels like sweater weather today.");
    }
} else {
    if (weather === "raining") {
        console.log("It's warm but it's raining. A light windbreaker will do.");
    } else if (weather === "sunny") {
        console.log("It's warm and sunny. Tank top it is.");
    } else {
        console.log("It's warm and clear. Regular old T-shirt day.");
    }
}
```

## Logical Operators

So far, we've only had one comparison inside of our conditionals. However, you can combine any number of comparisons together with **logical operators**  such as AND (`&&`) and OR (`||`). You've already seen one operator, NOT (`!`), which changes any comparison into the opposite boolean.

For example, if we only want our windbreaker when it's cold AND windy outside, we can combine those thoughts together with `&&`:

```javascript
if (temperature === "cold" &&  windSpeed > 10){
	console.log("Time for the windbreaker!");
}
```

Similarly, if we want our boots when its either snowing OR raining, we can. use the `||` operator:

```javascript
if (weather === "snowing" || weather === "raining"){
	console.log("Looks like we need to wear boots today.");
}
```

## Buckle Up For Conditionals

Conditionals are exciting because they allow your program to make decisions based on user input. Create a variable named `userIsBuckled`, and let's make the user a responsible driver and assign a value of `true`.

```javascript
let userIsBuckled = true
```

Your challenge is to write a conditional statement that evaluates this variable and makes the following decisions:

* If `userIsBuckled` is equal to `true`, log the message `You deserve a safe driver discount!` to the console.
* If `userIsBuckled` is equal to `false`, log the message `Click it or ticket!` to the console.

Once you see the message `You deserve a safe driver discount!`, change the value of `userIsBuckled` to `false` to be sure you see the message `Click it or ticket!` returned.


<details>
    <summary>Reveal Our Answer</summary>
    
    Here’s how we did it:

```javascript
if (userIsBuckled === true) {
    console.log("You deserve a safe driver discount!")
} else {
    console.log("Click it or ticket!")
}
```

</details>

## A Tense Negotiation 

In this challenge, we’ll program a conditional sequence to respond to a given `price` value. Create a variable named `price` and test your conditional statement using the following values of your choice.

1. `price` is less than the number 5.
2. `price` is at least 5, but not higher than 10.
3. `price` is higher than the number 10.

Now write you conditional statement that will return the following outputs based on the value of `price`.

* If the price variable is less than `5`, log the message `"I'll take it!"`.
* If the price variable is greater than `10`, log the message `"______ for this? You must be joking!"` Fill in the blank with the `price` variable using string concatenation (i.e., `string1` + `string2`).
* If neither of the conditions above are met, log the message `"Take off 10% and you've got a deal."`.

<details>
    <summary>Reveal Our Answer</summary>
    
    Here’s how we did it:

```javascript
if (price < 5) {
    console.log("I'll take it!");
} else if (price > 10) {
    console.log(price + " for this? You must be joking!");
} else {
    console.log("Take off 10% and you've got a deal.")
}
```

</details>
