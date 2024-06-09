# Setup

Open your Terminal application and navigate to your ~/ga/lectures directory:

```bash
cd ~/ga/lectures
```

Make a new directory called `advanced-css`, then enter this directory:

```bash
mkdir advanced-css
cd advanced-css
```

Create a directory called `css`:

```bash
mkdir css
```

Then, create an `index.html` file, as well as a `style.css` file that lives inside the `css` directory. These files will hold your work for this lecture:

```bash
touch index.html css/style.css
```

With the files created, open the contents of the directory in VS Code:

```bash
code .
```

Open the `index.html` file and add HTML boilerplate (remember to use Emmet!). Then make use of the `style.css` file by adding this line inside the `<head>` tag:

```html
<link rel="stylesheet" href="./style.css">
```

Open the `index.html` file in your browser.

## Adding CSS

CSS can be added to a site in two ways:

By including a `<style>` tag in your HTML that contains CSS code. This is called internal CSS, because we are going to set aside our CSS code within our HTML file.

In a separate CSS file that’s linked to your site with a `<link>` tag. This is called external CSS, or an external style sheet.

In most projects, it's recommended to use separate CSS files linked to your HTML page. Keeping it separate will help you stay organized, especially when you started building large, complex pages with lots of HTML and CSS.

**Pro tip:** Make sure to include punctuation, line breaks, and indentation! This makes your code more readable and ensures that it will run correctly.
