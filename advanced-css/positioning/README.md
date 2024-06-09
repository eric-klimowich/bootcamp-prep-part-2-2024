# CSS Positioning

## The Position Property

Our last layout tool, the `position` property, helps us determine how our elements are positioned on a page. Do we want an element to sit all the way to the right? Or at the very bottom? Adjusting its `position` will accomplish that!

We’ll look at two common `position` values:
* ***Relative*** positioning means that the element is positioned relative to its normal position on the page — where it is already located. Other content won’t be affected by it.
* ***Absolute*** positioning means that the element’s position is adjusted relative to a parent element with a set position. If it has no parent element, or if the parent doesn’t have a set position, it will be adjusted relative to the `<body>` of the document.

## Positioning Our Elements

Once we tell an element _how_ it should be displayed, let’s get it to display _where_ we want. We can do this by targeting the `top`, `right`, `bottom`, and `left` properties. These properties take distance values, like pixels, that measure based on the point _from which_ we would like to place our element. 

For example, this styling would push the `<div>` 20px **away from the top** of the page and 10px **away from the left side** of the page:

```css
div {
  position: absolute;
  top: 20px;
  left: 10px;
}
```
**Remember**: You’ll need to add the `position` property (`relative` or `absolute`), as well as the directions to get an object to move.

## Position: Relative

Setting `position: relative` moves an element relative to its original location.

Let’s say we start out with two colored `<div>`s of the same size. With no set positioning, as block elements, they’re stacked on top of each other and begin in the top-left corner of the page.

If we add in some relative positioning to the top yellow `<div>`...

```css
#yellow {
 position: relative;
 top: 100px;
 left: 100px;
}
```

... we’d end up with the format on the right! The `position-relative` property will push the yellow block 100px away from where it started at the top and 100px away from where it started at the left.

## Position: Absolute

Using `position: absolute` will move an element relative to a parent element with a set position, or to the body of the page. 

For example, the yellow `<div>` starts out in the upper left-hand corner. Because it doesn’t have a parent element, when we add absolute positioning, it’s positioned against the `<body>`. The `right` and `top` properties define where it goes. (When one of these properties, like `right`, is set to `0`, it means that the element is 0px away from this side — all the way against it.)

```css
div {
 position: absolute;
 right: 0;
 top: 80px;
}
```

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/css-unit-assets/no-positioning-absolute-positioning.png)


## Knowledge Check

Let’s look at the social icons on Hannah’s website, which are listed in a `<ul>`. They’re taking up a lot of space on the page, don’t you think? Let’s get them out of the way and stick them in the upper right-hand corner.

What type of positioning would we use?

<fieldset>
  <legend>Please select one of the following</legend>
  <input type="radio" name="action" id="track" value="track" /><label for="track">`relative`</label><br />
  <input type="radio" name="action" id="event" value="event"  correct="true" /><label for="event">`absolute`</label><br />
</fieldset>

## Conclusion

Here are some more resources on CSS layouts:
* <a href="http://learnlayout.com/display.html" target="_blank" rel="noreferrer noopener">Display Property</a>.
* <a href="http://learnlayout.com/position.html" target="_blank" rel="noreferrer noopener">Positioning in CSS</a>.
