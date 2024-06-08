![Intro to JavaScript Functions](../assets/hero.png)

# Scope

Now that we’re more familiar with the concept of code blocks, we can discuss the idea of **scope**. In JavaScript, where you declare a variable or function affects where it can be used by the program. Scope helps us specify if and how a program can use specific variables and functions.

The curly braces surrounding a code block — in a function or conditional statement — define a new scope, which will limit how you can access variables **outside** of the scope.
* **Globally scoped** variables aren't declared inside of any code block, and are available anywhere in the program. 
* **Locally scoped** variables are only available inside of the code block they're declared within. A `let i = 0` declaration inside of a for loop is a classic example– you won't be able to access that particular `i` variable outside of the for loop.

Let’s look more closely at global and local scope.

## Global Scope

A **globally scoped variable** is one to which the entire program has access. Most of the variables we’ve defined so far have been global in scope. They’ve been defined outside of a function or specific code block, which means all scripts and functions on a webpage can access them.

In the code below, the `brother` variable is a **global variable** because it’s defined on its own, outside of a specific function:

```js
const brother = "Phillip";

function sayHello() {
   console.log("Hello " + brother);
}

sayHello();   // brother can be accessed here

console.log(brother);   // and brother can be accessed here
```

## Local Scope

Conversely, a **locally scoped variable** is declared inside of a code block and can only be accessed by other members of the same code block. It cannot be referenced outside of that code block, which means it cannot be called or used outside of the braces in which it's contained.

In the code below, we can call `sayHello()` with no trouble, and the console log inside it will run. However, when we try to access the `brother` variable in the `console.log()`, we will get an error indicating that `brother` is not defined. This is because the `brother` variable is local to the `sayHello()` function:

```js
function sayHello() {
   const brother = "Phillip";
   console.log("Hello " + brother);
};

sayHello();   // brother would be logged here...

console.log(brother);   // but it can’t be accessed on its own here.
```

## Knowledge Check

What will we get from the `console.log` below?

```js
const user = "me"

if (user === "me") {
   const permitted = true;
}

console.log(permitted);
```

<details>
<summary>Solution: </summary>
This console log will not run because the variable <code>permitted</code> has not been defined in its scope.
</details>
