## Placing an element in the DOM

There are several methods we could use to do this, one of the most common methods is - the [`appendChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) method. In the previous example, that is why we needed access to the `<body>` element. Let's use its `appendChild()` method to add the `h2Element` to the end of it:

```javascript
const bodyElement = document.querySelector('body');

console.dir(bodyElement);
```

```javascript
const h2Element = document.createElement('h2');
```

```javascript
bodyElement.appendChild(h2Element);
```

You should now see the `<h2>` we created in the browser! The `<h2>` element has been appended as a child of the `<body>` element in the DOM tree.

> ⚠ The `appendChild()` method works by adding the element we've passed to it as the ***last element*** inside of the element we're appending it to. Because the last element inside the body in our HTML is currently the `<p>` element, the `<h2>` element we've added will appear immediately after it.
>
> However, if we manually add more elements to the end of the current HTML file, the `<h2>` element will appear after those- because it is added by our JavaScript at runtime. You'll see this soon.

## Additional Placement Methods
In the above example, we covered placing an element onto the page with the `appendChild()` method. This is the most commonly used method for placing elements on a page, but sometimes, you need to place elements more precisely than that. Let's check out how.

What would have helped most in this situation is adding the new element relative to its sibling element. For example, say we always wanted the `<h2>` element to always be immediately after the `<p>` element in the document:

```html
<body>
  <h1 id="main-title" class="title">Intro to the DOM</h1>
  <p class="cool">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto fuga suscipit sint autem. Iure nam, libero perferendis ad doloremque quo eius nesciunt eveniet saepe. Voluptas qui dignissimos aliquam illo alias!
  </p>

  <!-- We *always* want the <h2> to be here!! -->
  
  <ul id="comments">
    <li>first comment</li>
    <li>second comment</li>
    <li>third comment</li>
  </ul>
  <button disabled>Click me!</button>
</body>
```

In this case, we could use the `<p>` element's [`after()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/after) method. The element we pass to the `after()` method will be placed immediately after the `<p>` element in the DOM. Luckily, there's already a cached element reference for this element - `paragraphElement`. To avoid there being a duplicate `<h2>` element on our page, get rid of this line:

```javascript
bodyElement.appendChild(h2Element);
```

And replace it with this:

```javascript
paragraphElement.after(h2Element);
```

Now, the `<h2>` element always follows the `<p>` element!

Many other methods exist to place elements more precisely. You might have already guessed that there is a [`before()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/before) method. There's a [`replaceChild()`](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild) method that can also be handy for swapping one element for another. Or even [`insertAdjacentHTML()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML). Explore the possibilities on your own if you require them!
