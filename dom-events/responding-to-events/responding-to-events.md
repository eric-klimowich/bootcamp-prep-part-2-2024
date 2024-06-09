## Responding to Events

Let's build out functionality so that users are able to add a comment to a list by typing their comment in an input and clicking a button to submit their comment.

Add the following code below the existing `<div>` element inside of the `<body>`:

```html
  <h2>Comments</h2>
  <ul>
    <li>Reading is what? Fundamental!</li>
  </ul>
  <h3>Add a comment</h3>
  <input>
  <button id="comment-button">Add comment</button>
```

When we click the **Add comment** `button`, a new comment should be created using the text entered in the input.

In JavaScript, you can attach event listeners to various elements within the DOM. This includes not just the obvious interactive elements like buttons, but also ones you might not expect, such as a heading (`<h1>`).

However, it's generally better to add event listeners to elements that are inherently interactive. For example, buttons come with built-in styles that make them look clickable. They're designed to signal to users that they can interact with them. People are already familiar with clicking on buttons, so they naturally know how to interact with these elements.

## Set up the button event listener

The event we want to respond to is the user clicking the **Add comment** button, so we're going to need to start by selecting that element in the DOM:

```javascript
const commentButtonElement = document.querySelector('#comment-button');

// let's log it to confirm
console.dir(commentButtonElement);
```

Check the console to confirm you selected the correct element. With that work done, we'll attach an event listener to it:

```javascript
commentButtonElement.addEventListener('click', function() {
  console.log("I work!");
});
```

Return to the browser, then click on the button. If everything is connected correctly, then you will see the string "I work!" in the console when you click on the **Add comment** button.

> ♻ **Repeatable pattern**: Use console dir/log to check your work when writing event listeners. Small steps are the path to success. It's easier to troubleshoot small things along the way than to backtrack later through large chunks of code.

## Create an `<li>` element

We will start small in the event listener, working our way up to the intended functionality.

Remove the `console.log()` we added to confirm the event listener works and replace it with a line to create a new `<li>` element. To do this, you'll use the `document` object's [`createElement()` method](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement):

```javascript
commentButtonElement.addEventListener('click', function() {
  const commentElement = document.createElement('li');
});
```

We've named this variable `commentElement` because that's what it will be - a single `<li>` comment that is part of our larger comment list. It's important to remember that just because we created the element doesn't mean it's visible on the page yet - we haven't given it content or told it where to go!

## Setting text on the `commentElement`

Let's add some text to the `commentElement` before we place it in the DOM!

Although our ultimate goal is to set the text currently written in the `<input>` element as the text in the `commentElement`, we'll start by just adding some generic text:

```javascript
commentButtonElement.addEventListener('click', function() {
  const commentElement = document.createElement('li');
  commentElement.textContent = 'Can you hear me?'; // placeholder text
  console.dir(commentElement);
});
```

When you click the **Add comment** button, a new list item is is logged to the console with `"Can you hear me?"` as the text content.

Now that it exists, let's place it in the DOM.

### Placing the `<li>` in the DOM

Next we'll handle placing our new element in the DOM by selecting the `<ul>` element and adding the new `<li>` to it.

```javascript
const commentListElement = document.querySelector('ul');
console.dir(commentListElement);
```

Once you confirm that you have selected the correct element, you can remove the `console.dir()`.

Now, you're ready to add the newly created element to the webpage. We'll do this by *appending* it to the `commentListElement`.

 Using `appendChild()`, the new element is added as the last child of the parent element. If the parent element has no children, the new element becomes the first child.

```javascript
commentButtonElement.addEventListener('click', function() {
  const commentElement = document.createElement('li');
  commentElement.textContent = 'Can you hear me?';
  commentListElement.appendChild(commentElement);
});
```

Let's pause to appreciate how the naming of our variables makes the code easier to understand, almost like reading a sentence in English. For example, when a user clicks the comment button, our code creates a new comment, gives it text content, and adds it to the comment list. This process is clear in our code because of how we've named our variables: they directly reflect the elements they represent in the DOM.

Now that we have a functional list, there is only one step left. Instead of the current placeholder text, let's display whatever text the user has typed into the `<input>` element.

## 🎓 You Do

1. Select the `<input>` element in the DOM. Assign it to a variable called `inputElement`.
2. Don't forget to `console.dir()` the `inputElement` to be sure you're set up for success in future steps!

## Setting text on the `commentElement` to the value of `inputElement`

It's time for the moment we've all been waiting for, collecting real data from our users!
The `<input>` element has a special property called `value` that holds whatever the user has typed inside the `<input>` element. Take a moment to inspect the `console.dir()` of the `inputElement` to confirm this!

We will use this property to set the `textContent` of the new `commentElement`:

```javascript
commentButtonElement.addEventListener('click', function() {
  const commentElement = document.createElement('li');
  commentElement.textContent = inputElement.value; // replace placeholder text
  commentListElement.appendChild(commentElement);
});
```

Write some text in the input and click the button. Success!

## 🎓 You Do some more!

There are two things we can do to improve the user experience of this application:

- If the input has no content, a new `<li>` should not be created in the comment list.
- Remove the text from the `<input>` when the user submits a new comment after their comment has been added to the comment list.

Try to tackle these on your own. You won't need to use any properties we haven't already discussed to accomplish these tasks.
