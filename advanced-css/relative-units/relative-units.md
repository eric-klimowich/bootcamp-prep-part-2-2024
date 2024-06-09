## Relative units

We use CSS units to specify the size of elements in a CSS stylesheets. Relative units are based on the size of another element on the page. Some examples of relative units include:

- `em`: Ems are based on the font size of the parent element. `2em` is twice the font size of the parent element. If the font size of the parent is `12px`, then `2em` is `24px`.
- `rem`: Rems are similar to ems, but they are based on the font size of the root element.
- `%`: Percentages are based on the size of the container element, and as a result are always relative to the size of that element.
- `vw` - 1% of the viewport's width.
- `vh` - 1% of the viewport's height.

**Relative units** are valuable when you want elements to adapt and scale proportionally in response to changes in the parent or root elements. For example, when setting font sizes, using relative units like `ems` or `rems` makes the text size relative to the parent element or the root element (usually the `<html>` element). This approach ensures that text remains readable and visually consistent across various screen sizes and devices.

## Which units to use

The type of CSS units that we should use depends on the specific property that we are styling. For example, if we were styling the width of an element, we could use `%` so that the element always takes up the same amount of its available container.

For font size, `rem` is a great option. `rem` is predictable - the value will always be based off the same root value. Note that `rem` is based off of the root element's font-size, which defaults to `16px`.

For example:

- 1rem = 16px
- 1.5rem = 24px
- 0.5rem = 8px

Unlike `px` units, `rem` is responsive. As the root font size changes, all of the relative values will change accordingly. This has big implications for accessibility - suppose a user changes their preferred font size to 18 in their browser settings. Now, `1rem` equals `18px`s, and so forth:

- 1rem = 18px
- 1.5rem = 27px
- 0.5rem = 9px

All of our relative units update accordingly, and the font size of the element is dynamically consistent with the rest of the page.

Here are some examples of how to use relative units:

```css
/* Set the width of an element to the entire width of the viewport */
div {
  width: 100vw;
}

/* Set the font size of an element to 2 times the root font size */
p {
  font-size: 2rem;
}

/* Set the margin of an element to 10% of its container element */
input {
  margin: 10%;
}
```

### Pitfalls when specifying height and width

`min-height` and `min-width` are CSS properties rather than units, but they are often used in conjunction with relative units to help build responsive layouts.

They prevent the height or width of an element from becoming smaller than whatever value is specified.

Using `height` and `min-height` as an example, `min-height` always overrides height. The following code styles a `div` which at minimum is `10rem` tall, but can expand up to `100%` of the available height of the container:

```css
div {
  /* div takes up full height of the container element */
  height: 100%;
  /* min-height specifies that the div will be at minimum 10rem tall */ 
  min-height: 10rem; 
}
```
