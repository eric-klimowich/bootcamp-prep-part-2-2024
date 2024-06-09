## Modifying text

Once you've learned to select an element in a web page using JavaScript, the next step is often to modify its text content. This is a common task in web development, allowing dynamic updates to the page content.

To modify text, we use the [`textContent`](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent) property of an element. This property provides a straightforward way to handle an element's text. It's efficient and avoids issues that can arise with other text-handling methods. Essentially, `textContent` does exactly what its name implies: it manages the text content of an element.

Let's try it:

```javascript
paragraphElement.textContent = 'The placeholder text is gone!';
```

By adding this line to your JavaScript, the text within `paragraphElement` changes to `'The placeholder text is gone!'`. It's as simple as assigning a new string to the `textContent` property of the element.

It's important to recognize that `textContent` is a property, just like other properties on objects in JavaScript. This remains true even though it's part of a DOM  element.

For example, we can console log it:

```javascript
console.log(paragraphElement.textContent);
// prints: 'The placeholder text is gone!"
```

We can even perform logical operations with it:

```javascript
if (paragraphElement.textContent !== '') {
  console.log('The paragraph has text content!');
}
```

This operation checks if the `textContent` of `paragraphElement` is not empty. If it has any text, it logs a message to the console.

## Modifying style

DOM elements also have a [`style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) property that can be used to set CSS styling!

In web development, changing the style of elements dynamically is a common requirement. This is where the `style` property of DOM elements becomes useful. It allows you to set CSS styles directly using JavaScript.

### Using the style property

Every DOM element has a `style` property. This property is an object where you can set various CSS properties to style the element. For instance, if you want to center the text in a header (`<h1>` element), you would do it like this:

```js
titleElement.style.textAlign = 'center';
```

In this example, `titleElement` is your selected `<h1>` element. By setting its `textAlign` property to `'center'`, you center the text within it.

### CSS property naming conventions

- **In CSS:** We use ***kebab-case*** for property names. This means words are lowercased and separated by hyphens, like `text-align`.
- **In JavaScript:** Due to syntax rules, variable and property names cannot include hyphens `(-)`. Therefore, we use ***camelCase*** for CSS properties when working in JavaScript. For example, `text-align` in CSS becomes `textAlign` in JavaScript.

### 🎓 You Do

Let's get some practice adding some styles directly to a DOM element. Change the text color of the `<p>` element to a color of your choosing.
