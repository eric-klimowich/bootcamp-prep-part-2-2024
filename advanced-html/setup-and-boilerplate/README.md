## Setup

Open your Terminal application and navigate to your `~/ga/lectures` directory:

```bash
cd ~/ga/lectures
```

Make a new directory called `html-deep-dive`, then enter this directory:

```bash
mkdir html-deep-dive
cd html-deep-dive
```

Then, create an `index.html` file. This file will hold your work for this lecture:

```bash
touch index.html
```

With the files created, open the contents of the directory in VS Code:

```bash
code .
```

Open the `index.html` file and add HTML boilerplate by typing `!` and then hitting the `Tab` key.

Open the `index.html` file in your browser (you can right-click and open in browser).

Let's review the boilerplate code generated!

## The HTML Boilerplate

Here’s an example of an HTML boilerplate. It should be inserted at the beginning of any HTML document to let browsers know that what follows is HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title> </title>
  </head>
  <body>
  </body>
</html>
```

Let’s examine each of these lines more closely to find out what they do.

### The DOCTYPE tag

This lets your web browser know that the following document will be written in HTML. 

```html
**<!DOCTYPE html>**
<html>
  <head>
   <title> </title>
  </head>

<body>
</body>

</html>
```

### The html tag

The `<html>` tag begins your HTML document. It says, “Everything between my _opening_ tag (`<html>`) and my _closing_ tag  (`</html>`) will be part of the following HTML-based instructions.”

```html
<!DOCTYPE html>
**<html>**
  <head>
    <title> </title>
  </head>
  <body>
  </body>
**</html>**
```

### The head tag

The `<head>` tag contains most of the under-the-hood stuff that helps identify your webpage and allows it to show up in search results. This is called **metadata**.

```html
<!DOCTYPE html>
<html>
  **<head>**
   <title> </title>
  **</head>**

<body>
</body>

</html>
```

### The title tag

The `<title>` tag may sound obvious, but in fact, it _doesn’t_ display any kind of title text on your webpage. Instead, the `<title>` tag provides your page with a name that will appear in search engine results. It’s also the text that appears at the top of your browser window or tab. See what appears for Netflix, Google, and Medium in the image below? Those are `<title>` tags in action.

```html
<!DOCTYPE html>
<html>
  <head>
   **<title> </title>**
  </head>

<body>
</body>

</html>
```

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/html-unit-assets/intro-to-html/title%20tag.png)

### The body tag

You’ll use the `<body>` tag to hold what’s actually displayed on your webpage, including all of your text, hyperlinks, and images. See the text and images that appear on Medium’s website? All of that is included in the `<body>`.

```html
<!DOCTYPE html>
<html>
  <head>
   <title> </title>
  </head>

**<body>**
**</body>**

</html>
```

![link text](https://ga-instruction.s3.amazonaws.com/assets/intro-tech/html-unit-assets/intro-to-html/body%20tag.png)

