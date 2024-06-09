# Common CSS Properties

In this lesson, we'll focus on the most commonly used CSS properties that are essential for styling websites. We'll cover how to manipulate layout, color, and text to improve the appearance and functionality of web pages. Let's get started and build a strong foundation in CSS styling.

## Text-Styling Properties

<details>
  <summary>color</summary>
  
  <p class="transcript-text">
    The color property changes the color of the text.

You can code the color property...
* With a regular word, such as color: red.
* Using a color’s **Hex code** — a unique six-digit value for any color, such as color: #f142a3.
* Using an **RGB value** — another unique identifier, such as color: rgb(226,28,35).

<img src="https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/color.png">
  </p>
</details>

<details>
  <summary>font-size</summary>
  
  <p class="transcript-text">
    The font-size rule affects — you guessed it — the size of your font. By default, certain HTML elements are larger than others: h1 is the largest, followed by h2, and so on. But you can also adjust these sizes how ever you’d like.

      Here’s how you can set font-size:
      * Define the pixel size (e.g., font-size: 12px).
      * Set the size relative to other elements using em. font-size: 0.5em makes the font half the size of other elements, while font-size: 2em makes it twice as big.
      
    <img src="https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/font-size.png">
  </p>
</details>

<details>
  <summary>font-weight</summary>
  
  <p class="transcript-text">
    font-weight defines how heavy the text should be. 

You can set font-weight a couple of ways:
* Using font-weight: bold, which is similar to the “bold” setting in a word processor.
* Using a numeric thickness on a scale of 100–900.

<img src="https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/font-weight.png">
</p>
</details>

<details>
  <summary>font-style</summary>
  
  <p class="transcript-text">
    font-style is most often used to make text italic, as you would in a word processor.

It’s written as: font-style: italic.

<img src="https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/font-style.png">
 </p>
</details>

<details>
  <summary>text-transform</summary>
  <p class="transcript-text">
    You can use text-transform  to...
* Set all letters in a word to upper case: text-transform: uppercase.
* Set all letters to lower case: text-transform: lowercase.
* Capitalize the first letter in each word: text-transform: capitalize.

<img src="https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/text-transform.png">
 </p>
</details>

<details>
  <summary>text-decoration</summary>
<p class="transcript-text">
  text-decoration can add lines under or through your text:
  * text-decoration: underline
  * text-decoration: line-through
  
  Most frequently, it’s used to remove the default underline for hyperlinks (the anchor tag in HTML) by setting the value to none.
  
  <img src="https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/text-decoration.png">
    
 </p>
</details>

<details>
  <summary>text-align</summary>
  
  <p>
    The text-align property affects how your content is aligned on the page: centered, right-aligned, or left-aligned (once again, just like in a word processor). It’s written as: text-align: right.

<img src="https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/text-align.png">
 </p>
</details>

## Display Basics

All HTML elements have some default styling; `<h1>`s are always bigger than `<h2>`s, `<ul>`s always have solid black bullets, etc.

Likewise, all HTML elements have a default way of being displayed on a page: as either a **block element** or an **inline element**.

| Block Elements | Inline Elements |
| -- | -- |
| Always starts on a new line. | Sit within the content that surrounds them. | 
| Take up the full width available on the screen. | Only take up as much width as necessary. | 
| Stack on top of each other when new ones are added. | Render in one line. |
| Can have set margins, padding, widths, or heights. | Cannot have set margins or padding. |
| `<h1-6>`, `<div>`, `<p>`, `<ul>`, etc. | `<a>`, `<span>`, `<img>`, etc. |

## Block vs. Inline Elements

<details>
  <summary>Block Elements</summary>

  Headings are perfect examples of block elements. See how they stack on top of each other in the order they are added?

<img src="https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/block-element.png">
</details>

<details>
  <summary>Inline Elements</summary>
  An anchor tag is an inline element. See how it lines up on the same level as the adjacent elements instead of beginning a new line?

<img src="https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/inline.png">
</details>

## Changing the Display

What do we do when we have an element that is *naturally* inline, such as an `<img>`, but we want to display it as a *block* element? Or, when we have a natural block element, like a `<ul>`, but we want to display it all on one line, like an inline element?

There’s a CSS fix for that! We can use the CSS `display` property to override the default and tell the browser how to display our elements. 

Let's look at four common `display` values:
* `none`: The element won’t display at all.
* `inline`: The element will display in one horizontal line.
* `block`: The element will appear stacked and take up the entire width of the page.
* `inline-block`: Elements will sit next to each other (inline) but can have `margin`, `padding`, `width`, and `height` properties (block).

## Importing Fonts

You can add fonts that are imported from sources such as Google Fonts. Let’s say we wanted to add the font: <a href="https://fonts.google.com/specimen/Poiret+One?selection.family=Poiret+One" target="_blank" rel="noreferrer noopener">Poiret One</a>.

First, we'll have to import the font before we can apply it. To import a font:

1.  After selecting the font, click "Select Style" (located underneath Size). A new column window will pop up on the right hand side of the window. 
2. Under “Embed Font,” click “@Import.”
3. Copy the import URL (you won’t need the `style` tags in this case): `@import url('https://fonts.googleapis.com/css?family=Poiret+One');`.
4. Paste the entire URL at the very top of your CSS style sheet, above all of your other rules.

**Note**: You wouldn't see the font on the page just yet– it won't automatically be added to any HTML elements.

You can use this same approach to import as many fonts as you’d like, but keep in mind that importing more than 2–3 may slow down your website’s performance.

## Styling with Fonts

Once we’ve imported a font, we get it to show up on the page by applying it to HTML elements. To do so, create a CSS rule with the `font-family` property, followed by the name of the font in quotes, like this: `font-family: 'Poiret One'`.

Unfortunately for web designers like you, not all web browsers support all fonts. To be safe, always place a comma after your selected font and enter a generic font family (e.g., `serif`, `sans-serif`) as a fallback. If a web browser doesn’t support the first font you’ve selected, it will automatically choose your fallback.

Here’s what that would look like:

```css
h1 {
  font-family: 'Georgia', sans-serif;
}
```

## Additional Common Properties

### Margin
**Description**: Controls the space around elements.

**Example**:
```html
<div class="margin-example"></div>
```
```css
div {
  margin: 20px; /* <-- focus */
  background-color: lightblue;
  height: 100px;
  width: 100px;
}
```

### Border
**Description**: Sets the border properties of an element.

**Example**:
```html
<div></div>
```
```css
div {
  height: 100px;
  width: 100px;
  border: 2px solid black; /* <-- focus */
}
```

### Padding
**Description**: Controls the space inside an element between the content and the border.

**Example**:
```html
<div>Content</div>
```
```css
div {
  padding: 20px; /* <-- focus */
  background-color: lightgreen;
  width: 100px;
}
```

### Width and Height
**Description**: Specifies the width and height of an element.

**Example**:
```html
<div></div>
```
```css
div {
  background-color: lightcoral;
  width: 150px; /* <-- focus */
  height: 150px; /* <-- focus */
}
```

### Background-Color
**Description**: Sets the background color of an element.

**Example**:
```html
<div></div>
```
```css
div {
  background-color: #f0f0f0; /* <-- focus */
  height: 100px;
  width: 100px;
}
```

### Opacity
**Description**: Sets the opacity level for an element.

**Example**:
```html
<div>Semi-transparent</div>
```
```css
div {
  background-color: black;
  color: white;
  height: 100px;
  width: 100px;
  opacity: 0.5; /* <-- focus */
}
```

### Position
**Description**: Specifies the type of positioning method used for an element.

**Example**:
```html
<div class="container">
  <div class="relative-box">Relative</div>
  <div class="absolute-box">Absolute</div>
</div>
```
```css
.container {
  margin-top: 30px;
  position: relative;
  background-color: lightgrey;
  width: 300px;
  height: 200px;
}
.relative-box {
  position: relative;
  top: 20px;
  left: 20px;
  width: 100px;
  height: 100px;
  background-color: lightblue;
}
.absolute-box {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 50px;
  height: 50px;
  background-color: lightcoral;
}
```

### Z-Index
**Description**: Controls the stack order of an element.

**Example**:
```html
<span style="height: 100px; width: 100px; background-color: blue; position: relative;"></span>
<div></div>

```
```css
div {
  position: relative;
  background-color: red;
  height: 50px;
  width: 50px;
  z-index: 2; /* <-- focus */
}
```

### Overflow
**Description**: Specifies what happens if content overflows an element's box.

**Example**:
```html
<div>
  This is a lot of content that is more than what can fit in the box. This is a lot of content that is more than what can fit in the box.
</div>
```
```css
div {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  overflow: scroll; /* <-- focus */
}
```