# `for` Loops

## Learning Objectives

By the end of this lesson, you'll be able to:

* Write “for” loops.

## The Basic `for` Loop

We'll start with `for` loops, which programmers love for their accuracy and precision.

The syntax of a `for` loop in JavaScript may look a little cryptic — but don't fret. It can be broken down in terms we’ve already learned.

Here’s a basic `for` loop:

```javascript
for (let i = 0; i < 100; i++) {
  console.log(i);
}
```

## Knowledge Check

Before we get into `for` loop syntax, let’s take a moment to pause and think things through. Take a wild guess: What will this `for` loop do?

```javascript
for (let i = 0; i < 100; i++) {
  console.log(i);
}
```

<fieldset>
    <legend>Please select one of the following</legend>
    <input type='radio' name='answers' id='answer1' value='answer1' correct='true'/><label for='answer1'>Count every number from 0 up to, but not including, 100.</label><br />
    <input type='radio' name='answers' id='answer2' value='answer2' /><label for='answer2'>Count every number from 0 up to, and including, 100</label><br />
    <input type='radio' name='answers' id='answer3' value='answer3' /><label for='answer3'>Add 2 to each number, starting at 0, until it reaches 100</label><br />
</fieldset>
<!-- <button class='ant-btn ant-btn-primary multiple-choice-radio-submit'>Submit Answer</button> -->

---

## Breaking Down a For Loop

Let's break down the loop into several parts:

* The keyword and the variable.
* The conditional.
* The final expression.
* The code block.

### The Keyword and the Variable

![for loop keyword and iterator variable](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/for-variable.png)

* We start with the `for` keyword, with the **control statement** wrapped in parentheses after it.
* In the control statement, we declare a variable upon which to operate: `let i = 0`. This variable, `i`, is our **iterator**. In this case, we’ll have it start at `0`.
* To separate each part of our `for` loop statement, we **must use semicolons**.

**Note**: As you work more with loops, you’ll notice this declaration often contains `i`. It’s simply a convention that stands for “iterator.”

---

### The Conditional

![for loop conditional](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/for-condition.png)

* Next comes the conditional statement: `i < 100`. Whenever the loop is wondering if it should keep going, it will check this condition.
* If the condition evaluates to `true` — in this case, if `i` is less than `100` — the loop will execute the code block and then check the conditional again.
* Once the condition evaluates to `false`, the loop will end. Here, once the `i` variable becomes equal to `100`, this condition will become `false` and the loop will stop.

---

### The Final Expression

![for loop final expression](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/for-operator.png)

We’ve made it to the last part of the control statement: the **final expression**. This defines what the loop should do after each iteration of the code block. In this example, `i++` is using the **post-fix operator**, `++`, to say, “After each go-around of the loop, add `1` to the current value of the `i` variable.”

Although `i++` is the most common, you could perform any operation in the final expression — perhaps `i--` or `i += 2` — just as long as the operation brings the iterator closer to reaching the limit of the conditional statement.

---

### The Code Block

![for loop code block](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/for-action.png)

Once we’ve made it out of the control statement, which tells the loop how long it should run, we get to the **code block**, which tells the loop what to do in each iteration. Here, we’re simply logging the value of `i` to the console.

When the value has been logged, the loop will return to the control statement to see if it should keep going.

---

### Putting it All Together

```javascript
for (let i = 0; i < 100; i++) {
  console.log(i);
}
```

With all of the pieces working together, we can summarize this `for` loop like so:
1. Start an iterator variable, `i`, at the value of `0`.
2. If the value of `i` is less than `100`, execute the code block.
3. After the code block has run, add `1` to the `i` variable.

The loop will repeat Steps 2 and 3 until the conditional, `i < 100`, is finally `false`. At that point, the loop “exits” and the code block no longer runs.

## Knowledge Check

How many times would this `for` loop run?

```javascript
for (let i = 5; i < 10; i++) {
    console.log(i);
}
```

<fieldset>
    <legend>Please select one of the following</legend>
<input type='radio' name='answers' id='answer1' value='answer1'/><label for='answer1'>4</label><br />
<input type='radio' name='answers' id='answer2' value='answer2'  correct='true' /><label for='answer2'>5</label><br />
<input type='radio' name='answers' id='answer3' value='answer3' /><label for='answer3'>6</label><br />
<input type='radio' name='answers' id='answer4' value='answer4' /><label for='answer4'>10</label><br />
</fieldset>

## Echo Chamber

Write a `for` loop that logs the message `"Hello?"` three times.

<details>
    <summary>Reveal Our Answer</summary>
    
    Here’s how we did it:

```javascript
for (let i = 0; i < 3; i++) {
  console.log("Hello?");
}
```

</details>

## Looping Over an Array

One of the most common uses of a `for` loop is to loop through each element of an array. We use the `i` iterator to represent the index of the array and start it at `0` so we can access elements from the first to the last index.

The loop below will `console.log` every element in the `cookies` array:

```javascript
const cookies = ["chocolate chip", "gingersnap", "oatmeal raisin", "shortbread"];
for (let i = 0; i < cookies.length; i++) {
    console.log(cookies[i]);
}
```

Notice the conditional `i < cookies.length`? Because array indices start at `0`, the index of the last element will always be one less than the length of the array. We want to keep the loop going for as long as the iterator is less than `array.length`.

## Roll Call

You need to make sure the whole team is ready before you roll out. We’ve provided an array of `characters`, and it’s up to you to `console.log()` each one of them by using a `for` loop.

```javascript
const characters = ["Garnet", "Amethyst", "Pearl", "Steven"];
```

<details>
  <summary>Reveal Our Answer</summary>

  Here’s how we did it:

```javascript
for (let i = 0; i < characters.length; i++){
    console.log(characters[i]);
}
```

</details>
