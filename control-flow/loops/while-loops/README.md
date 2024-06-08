# Loops

## Learning Objectives

By the end of this lesson, you'll be able to:

* Write `while` loops.

## Introducing `while` Loops</h1>

Let’s meet the simpler, cleaner cousin of the `for` loop: the `while` loop. It should be much easier to read and figure out what’s going on here, with no cryptic `++` or long control statements:

```javascript
let number = 0;

while (number < 11) {
    number = number + 1;
}
```

That’s right, there’s just one part of a `while` loop: the conditional. As long as the conditional is `true`, the loop will keep going. This loop will add `1` to the `number` variable as long as it’s less than `11`, at which point the loop will exit.

## Danger Zone

`while` loops might seem nice and slick, but they’re notorious for causing infinite loops and crashing browsers everywhere.

In a `for` loop, the final expression ensures that we’re progressing toward making the conditional `false`. But with a `while` loop, you must ensure the code **inside the code block** gives you an exit strategy by eventually making the conditional statement `false`.

The loop below, for instance, is an easy way to crash your browser and freeze up the tab with unlimited executions of the code block. Think it through: Why is this the case?

```javascript
let number = 10;
while (number < 500) {
    number = number - 1;
}
```

<details>
    <summary>Reveal Our Answer</summary>
    
Because subtracting `1` from the `number` variable will always keep the conditional `number < 500` `true`, this loop has no way of stopping. The only way out is the time-tested “close your computer as quickly as you can and run away” trick.
   
</details>

## `for` or `While`, That is the Question

Upon seeing how simple the `while` loop is, most beginners reach for it whenever they can. However, it’s not always the best tool for the job. You have to define a variable outside of the loop (not often a great thing), and you run the risk of infinite loops.

Considering how strictly the `for` loop is defined, there’s a general rule on when each type of loop is appropriate:
* If you know **exactly how many times** the loop should execute, use a `for` loop for its precision. This includes iterating over an array, which has a specific amount of items.
* If you’re **not sure how many times** the loop has to run but you do know when it should stop, use a `while` loop.

## The Wild World of Crypto

You recently invested $1,000 into cryptocurrency. Good luck! Using a `for` loop and a conditional, log the value of your `investment` throughout the next 10 years by using the following rules:

* Each year, the investment increases by 10%. Add 10% to the `investment` variable before logging the value.
* In the seventh year, the investment loses 75% **instead** of increasing. Eeek!

 Use a `for` loop to log how many years it has been and how much the investment is worth for each year. Your logs should look like this:
 
 ```
 Years: 1 Value: 1100
 Years: 2 Value: 1210
 ```

<details>
    <summary>Reveal Our Answer</summary>
    
    Here’s how we did it:

```javascript
let investment = 1000;

for (let year = 1; year < 11; year++) {
    if (year === 7) {
        investment = investment * 0.25;
    } else {
        investment = investment * 1.10;
    }
    console.log("Years: " + year + " Value: " + investment);
}
```

</details>

## Countdown

Use a `while` loop to count down the `daysUntilTheFinale` of your favorite show, starting at 30 days. For each day, log the message `"Only ______ more days!"` by filling in the value of `daysUntilTheFinale` in the blank. Stop the countdown once `daysUntiltheFinale` reaches `0`, then log the message `"It's finally here!"`.

Your first message should be `"Only 30 more days!"` and it should log down to `"Only 1 more days!"`.

<details>
    <summary>Reveal Our Answer</summary>
    
    Here’s how we did it:

```javascript
let daysUntilTheFinale = 30;

while (daysUntilTheFinale > 0) {
    console.log("Only " + daysUntilTheFinale + " more days!")
    daysUntilTheFinale = daysUntilTheFinale - 1;
}

console.log("It's finally here!");
```

</details>

## Conclusion

Our JavaScript programs are suddenly a lot smarter now that they can use conditionals and control flow!

No matter how complex an application's underlying goals become, you'll always be working with these fundamental tools to direct the flow of your program.

</textarea>