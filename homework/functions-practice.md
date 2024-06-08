
---
---

- How do we want them to complete/submiit this? by forking and cloning the repo? or by using codepen?

- This homework has 5 function exercises and 5 control flow exercies. Just a note, question 10 will be a level up since it requires a nested loop.

---
---

[header tk]

# Functions and Control Flow Practice

The purpose of this exercise is to practice working with functions. Think of it
as doing reps or practicing scales! The more you practice, the better you'll
get.

## Prerequisites

* Fundamental JavaScript: syntax, data types, and arrays
* Conditions, including `if`, `if`/`else`, and `if`/`else if`/`else`
* Loops, both `for` loops and `while` loops
* Function expressions

## Setup and Instructions (tentative)

1. Fork and clone this repository. ❓❓ OR should we use codepen? ❓❓
2. In a javaScript file, complete the excercies and `console.log` each exercise's answer.
3. Be sure to number each function with a comment above it. 
  - For example, here's the first function, our gift to you: 

```js
// 1.

const print = function(message) {
  console.log(message);
};

print("Hello, world!");

//2.

your code here

```
4. After completing each exercise, you may comment out that exercise's code to ease completion of subsequent exercises.
5. Before submitting, please uncomment ALL solutions.

## Exercise

1. Define a function called `print`. It should take a parameter called message. When invoked and passed a string, print should `console.log` the message.

2. Define a function called `multiply` that takes two parameters: a and b. When invoked, multiply a times b. If b an argument is not passed in for b, then double a (i.e. multiply it by two).
    > Hint: use a default parameter.

3. Define a function called `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Math.max method is not allowed.

4. Define a function called `maxOfThree` that takes three numbers as arguments and returns the largest of them. Math.max method is not allowed.

5. Define a function called `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
    > Hint: look up the `.lentgh` method to get the length of an array.

6. Create a loop that prints every even number between 0 and 100.

7. Write a loop that pushes every even number between 0 and 100 into an array, then print the array.

7. Create a variable called `someNumber` and assign it a random number between 0 and 100.

-  Create a conditional that matches these requirments:
    - if someNumber is less than 30, print "that's a small number"
    - if someNumber is between 30 and 60, print "the number is medium sized"
    - if someNumber is greater than 60, print "We got a big one!"

9. Using the following `nums` array, write a `for` loop to iterate through the nums array and add the number to **one** of the following arrays: `fizz`, `buzz` or `fizzbuzz` - based upon the following:
    - Add to the `fizzbuzz` array if the number is evenly divisible by 3 & 5.
    - Add to the `fizz` array if the number is evenly divisible by 3.
    - Add to the `buzz` array if the number is evenly divisible by 5.
```js 
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
```
#### Level Up 🚀

10. Using your favorite emoji, draw a square using a `for` loop. You may build a 10x10 square to start, but you also may draw any rectangle. 
    > Hint: You will need to use a nested loop for this exercise.


## Solution 

Try not to peek!

<details>
<summary> 🔎 Possible Solutions</summary>

```js
// EXERCISE 1.
const print = function(message) {
  console.log(message);
};

// Example:
print("This is a test message.");


// EXERCISE 2.
const multiply = function(x, y=2) {
  return x * y;
};

// Example:
console.log(multiply(5, 3)); // Output: 15
console.log(multiply(4));  // Output: 8


// EXERCISE 3.
const maxOfTwoNumbers = function(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

// Example:
console.log(maxOfTwoNumbers(5, 3)); // Output: 5
console.log(maxOfTwoNumbers(4, 7)); // Output: 7


// EXERCISE 4. 
const maxOfThree = function(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
};

// Example:
console.log(maxOfThree(5, 3, 9)); // Output: 9
console.log(maxOfThree(4, 7, 6)); // Output: 7


// EXERCISE 5.
const sumArray = function(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

// Example:
console.log(sumArray([2, 4, 5])); // Output: 11



// EXERCISE 6.
for (let i = 0; i <= 100; i += 2) {
  console.log(i);
}

// EXERCISE 7.

const evenNumbers = [];

for (let i = 0; i <= 100; i += 2) {
  evenNumbers.push(i);
}

console.log(evenNumbers);


// EXERCISE 8.

const someNumber = Math.floor(Math.random() * 101); 
// if you assigned a specific number to someNumber instead, that's fine too!

if (someNumber < 30) {
  console.log("That's a small number.");
} else if (someNumber >= 30 && someNumber <= 60) {
  console.log("The number is medium sized.");
} else {
  console.log("We got a big one!");
}

// EXERCISE 9.

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num);
  } else if (num % 3 === 0) {
    fizz.push(num);
  } else if (num % 5 === 0) {
    buzz.push(num);
  }
}

console.log('fizz:', fizz);
console.log('buzz:', buzz);
console.log('fizzbuzz:', fizzbuzz);


// EXERCISE 10 - LEVEL UP.

for (let i = 0; i < 10; i++) {
  let row = '';
  for (let j = 0; j < 10; j++) {
    row += '🚀';
  }
  console.log(row);
}

//output: 
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
```
</details>

## Additional Resources

- [MDN Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
