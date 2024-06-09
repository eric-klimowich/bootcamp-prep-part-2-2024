## Adding elements to the page

We've already seen how we can select and modify pre-existing elements, but how do we create elements from scratch? One of the powerful features of JavaScript in web development is the ability to create new elements on a webpage. This is done using the `createElement()` method, a fundamental tool in dynamically manipulating a web page's structure.

We're going to add a new `<h2>` element immediately after the `<p>` element in the `body` of our webpage. This `<h2>` element will have the text content `'Comments section'`.

### 1. Select the `body` element

To add an element inside the `<body>` element, we first select the `<body>` element from the DOM. We can use `querySelector()` for this and specify the body element's tag name as the argument:

```javascript
const bodyElement = document.querySelector('body');

console.dir(bodyElement);
```

If we selected the element correctly, we'll have the entire body of our document logged in the browser console! Now that we have access to the `<body>` element, we can create a new element to place inside of it.

### 2. Create a new element

First, we'll need to create an element. We can do this with the [`createElement()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) method on the `document` object.

```javascript
const h2Element = document.createElement('h2');
```

In this example, we're creating a new `<h2>` element. The `createElement()` method takes one argument, a string, which specifies the type of element to create. Here, we pass `'h2'` to create an `<h2>` element. This element is now a JavaScript object that can be manipulated and inserted into the DOM.

Once you have created an element, you can treat it like any other element that you might have selected from the DOM. This means you can modify its properties, styles, and content.

For example, we can add text content to this new element:

```javascript
h2Element.textContent = 'Comments section';
```

Here, we’re setting the textContent of the h2Element to 'Comments section'. This adds the specified text to our new `<h2>` element.

Great! Except it doesn't appear on our page.

> It's important to note that this element only exists in our JavaScript application. It does not yet exist as an element you can see on the page in your browser. When an element has been created, but not yet placed on the page, we refer to it as being ***in memory***.

To see it, we need to place it on the page!

