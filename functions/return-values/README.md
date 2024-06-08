![Intro to JavaScript Functions](../assets/hero.png)

# Return Values

## What Comes Out of a Function

Just as crucial as what goes into a function is what comes out of it. So far, we’ve been using `console.log` to view the results of our function. But what if we don’t want to log the results immediately?

The output of a function is called its **return** value, and we use the `return` keyword inside the function to define the output.

Let’s refactor our `calculateTotal()` function so that the result is returned:

```js
function calculateTotal(price, salesTaxRate) {
   return (price + (price * salesTaxRate));
}
```

Now, we can use the result of the function. We could create a new variable called `total` and use it to store the result of `calculateTotal()` so that we can refer to it elsewhere.

```javascript
const total = calculateTotal(4.5, .10);
```

## Return vs. Console.log

At this point, you might be wondering about the actual difference between `return` and `console.log`. They both give you output, right?

Think of a function like a vending machine. You feed in your money and choice of selection, and you expect a product to come out of it. A `console.log` is the equivalent of a message on the machine that tells you, “I got your request for M&M’s.” It’s a helpful message, but you sure can’t eat it! The machine has to `return` something to you — in this case, the bag of M&M’s — which is the output of whatever you told it to do.

Although most of our examples up to this point have used `console.log`, in a real application, those statements are mostly used to debug what’s going wrong. A mature, finished browser application should have no `console.log` statements at all, because (hopefully) all of the bugs are fixed.

![Function Vending Machine](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/vending-machine.png)

## Your Programming Powers Have Multiplied

Write a function named `multiply()` that accepts two parameters and returns the result of multiplying the given numbers.

