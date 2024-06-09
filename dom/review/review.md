# Review

It’s now time to tie together our HTML, CSS, and JavaScript knowledge by using the Document Object Model (DOM) to manipulate a webpage. Most of the real-time interactions you see on a webpage are made possible by the DOM. Let’s make some magic!

## What is the DOM?

The DOM, or **Document Object Model**, is an interface that allows JavaScript to access HTML elements on a webpage to alter their structure, style, and content. Let’s break it down.

**Document:** The document is the webpage — typically the HTML document.

**Object:** Every HTML element — `<head>`, `<body>`, or `<p>` — is an object. Because they’re objects, we can use methods and properties to change, delete, and add to them.

**Model:** The model describes how the objects are laid out, often in a hierarchical tree. We call this the “DOM tree,” shown below. (You might see the terms “node,” “object,” or “element” all used interchangeably when referring to parts of the DOM.)

![DOM Tree](https://ga-instruction.s3.amazonaws.com/json/WDI-Fundamentals/assets/unit-11/Slide-17-DOM-Tree-Annotated.svg)

---

## What Does the DOM Do?

The DOM powers a lot of the everyday interactions on webpages with which you might be familiar. Its four core capabilities are to:

![DOM Options](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/js-unit-assets/dom.png)

In this lesson, we’ll focus on getting and setting content with the DOM. In the next lesson, we’ll explore how event listeners work.

## Getting Content from the DOM

The DOM allows you to **get** elements and content from a webpage.
 * It makes it easy to access content within a page; for example, when you want to find out what information a user has entered into a form field.
 * This information could include email addresses, first and last names, and more.

![](https://ga-instruction.s3.amazonaws.com/json/WDI-Fundamentals/assets/unit-11/Slide-6-Form-Email.svg)

---

## Set Content

The DOM allows you to **set** content on the page.
 * With the DOM, we can dynamically update the content of the HTML elements on our page.
 * Maybe we want to change the text of the `<>` on the site, or perhaps we want to update the `src` attribute of an image when the user clicks a button. We can dynamically update any of the HTML, text content, or attributes of the elements on our page.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/website-H1-src-attribute.png)

---

## Adding Effects

The DOM allows you to add effects and animations to a webpage.
 * Maybe we want a dropdown menu to expand when a user clicks on an icon. Or maybe we want a “Success” message to fade in when our user submits a form. Perhaps we want different images to fade in and out as a user scrolls down a page.
 * All of this is possible with JavaScript.

![](https://ga-instruction.s3.amazonaws.com/json/WDI-Fundamentals/assets/unit-11/Slide-7-Sidebar.svg)

## Create Event Listeners

The DOM allows you to create **event listeners**.
 * We don’t always want the final state of our webpage to be the same as its initial state. Rather, it should respond to a user’s behavior on the page.
 * JavaScript allows us to react to a user’s actions by having the DOM “listen” or “wait” for a user to take action before we run a block of code.
 * For example, maybe we want a button to change color after the user clicks it. To do so, we’d attach an event listener to the button that’s triggered by a click.

![](https://ga-instruction.s3.amazonaws.com/assets/tech/computer-science/intro-js/website-event-listener-button.png)

---

<h1 class="slide-header">The Good Kind of Manipulation</h1>

To make all those cool interactions happen, developers will **manipulate the DOM** to change, add, or store information from the webpage. 

At a high level, DOM manipulation is a two-step process:
1. First, you have to **find and select the HTML element** with which you want to work.
2. Once you’ve found the element, you can **manipulate (access, update, or remove)** it as you wish.

<a href="https://ga-create-api.s3.amazonaws.com/studyguides/meet-the-dom-af5130.pdf" target="_blank" download="meet_the_dom_study_guide.pdf" class="ant-btn" data-trackable="true" data-track-category="study guide" data-track-section="lesson page" data-track-action="download study guide"><span role="img" class="anticon"><svg viewBox="0 0 16 16" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><g class="download_svg__nc-icon-wrapper"><path d="M8 12c.3 0 .5-.1.7-.3L14.4 6 13 4.6l-4 4V0H7v8.6l-4-4L1.6 6l5.7 5.7c.2.2.4.3.7.3z"></path><path data-color="color-2" d="M1 14h14v2H1z"></path></g></svg></span><span> Download Study Guide</span></a>