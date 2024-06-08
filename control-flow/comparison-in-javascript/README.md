# Comparison in JavaScript

## Learning Objective

By the end of this lesson, you'll be able to:

* Use comparison operators to compare data.

## Comparison Statements

Computers make their decisions based on comparisons. Are two things equal? Is one thing greater than another? These comparative statements always boil down to a single Boolean value: `true` or `false`.

Here’s how we can write comparison statements in JavaScript:

| Operator | Functionality | Example |
| -------- | ------------- | ------- | 
| `>` | Greater than | `5 > 2` | 
| `>=` | Greater than or equal to | `5 >= 5` | 
| `<` | Less than | `2 < 200` | 
| `<=` | Less than or equal to | `1 <= 72` | 
| `==` | **Loose equality** tests if the left and right sides have equal values. | `5 == "5"` | 
| `===` | **Strict equality** tests if the left and right sides have equal values AND are the same data type. | `"apples" === "apples"` |
| `!==` | **Inequality** tests if the data type OR the value is different (basically, the opposite of `===`). | `5 !== "5"` |

---
## Loose and Strict Equality

It’s worth reviewing the difference between those equality and inequality operators, because they’re one of the trickiest parts of JavaScript.

* When using **loose equality comparison**, or `==`, JavaScript transforms the given values so that the data types will match. (Fancy term alert: This is called “type coercion.”)
    * `"4" == 4` would evaluate to `true`.
    * `4 == 4` would evaluate to `true`.
    * `5 == 4` would evaluate to `false`.


* When using **strict equality comparison**, or `===`, JavaScript isn’t so lenient; it makes sure the data type AND value match.
     * `"4" === 4` would evaluate to `false`.
     * `4 === 4` would evaluate to `true`.


* The **inequality operator**, `!==`, is just as strict; if the data types OR the values don’t match, it will evaluate to `true`.
     * `"4" !== 4` would evaluate to `true`.
     * `4 !== 4` would evaluate to `false`.


### Programmer Tip:

You can get a lot of confusing, unexpected answers to loose comparisons. **Always use strict equality (`===` or `!==` )** to ensure the things you compare are the same value and data type.

## Relational operators

JavaScript also has a host of relational operators: 

* `<` - Less than
    * `3 < 4` would evaluate to `true`.

* `>` - Greater than
    * `3 > 4` would evaluete to `false`.

* `<=` - Less than or equal to
    * `10 >= 5 + 5` would evaluate to `true`.

* `>=` - Greater than or equal to
    * `10 <= 7 + 7` would evaluate to `false`.

In a gaming app, you might use relational operators to check if a player's score is greater than a certain threshold to level up: `playerScore > 1000`.

## Knowledge Check

Select all of the options that will evaluate to `true`.

<fieldset>
    <legend>Please select all that apply</legend>
    <input type='checkbox' id='answer1' value='answer1' correct='true'/><label for='answer1'>"Baked Brie" !== 'baked brie"</label><br />
    <input type='checkbox' id='answer2' value='answer2' /><label for='answer2'>17 == "17"</label><br />
    <input type='checkbox' id='answer3' value='answer3' /><label for='answer3'>17 === "17"</label><br />
    <input type='checkbox' id='answer4' value='answer4' /><label for='answer4'>5 * 5 < 20</label><br />
    <input type='checkbox' id='answer5' value='answer5' /><label for='answer5'>99 >= 99</label><br />
</fieldset>

<br>

Remember, `==` will not care about data types, while `===` and `!==` will use **strict** comparison and include data types in their analysis.

## Using Comparisons to Create Conditionals

Comparison statements are nice, but they’re not that powerful on their own. After all, you don’t need a computer to tell you that `100 > 1`. The real power of comparisons lies their use in **conditional statements** to control what, when, and how things happen in your program.

And guess what — you do this all the time yourself. How do you make decisions when you’re getting ready in the morning? With conditional logic, of course.

![Real life use of comparison statements](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/conditional.png)
