# ![Responsive Design - Level Up - A Media Query Free Future](./assets/hero-a-media-query-free-future.png)

**Learning objective:** By the end of this lesson, the learner will be able to identify the limitations of media queries and experiment with new CSS math functions like `clamp()` to create more flexible designs.

Media queries have a few downsides - we end up re-writing a fair amount of CSS (hello bugs!) for many different devices, many of which we never see our content on. In addition, this process leads to potentially widely different user experiences, some of which could even cause our sites to break.

New CSS tools to help us write fewer media queries have recently gotten browser support such as [`clamp()`](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp), [`min()`](https://developer.mozilla.org/en-US/docs/Web/CSS/min), [`max()`](https://developer.mozilla.org/en-US/docs/web/css/max), and [`minmax()`](https://developer.mozilla.org/en-US/docs/web/css/minmax).

MDN has extensive documentation on these CSS functions - follow the links above to check them out.

Even with their browser support, these CSS math functions are still officially in a draft state, so we don't cover them in-depth. However, you should try implementing one (we'd recommend `clamp()`) just to test the waters!
