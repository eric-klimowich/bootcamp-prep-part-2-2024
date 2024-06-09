# ![Responsive Design - Setup](./assets/hero.png)

Open your Terminal application and navigate to your `~/code/ga/lectures` directory:

```bash
cd ~/code/ga/lectures
```

Make a new directory called `responsive-design`, then enter this directory:

```bash
mkdir responsive-design
cd responsive-design
```

Create a directory called `css`:

```bash
mkdir css
```

Then, create an `index.html` file and a `style.css` file inside the `css` directory. These files will hold your work for this lecture:

```bash
touch index.html ./css/style.css
```

With the files created, open the contents of the directory in VS Code:

```bash
code .
```

Open the `index.html` file and add HTML boilerplate by typing `!` and then hitting the `Tab` key. Then make use of the `style.css` file inside of the `css` directory by adding this line inside the `<head>` tag:

```html
<link rel="stylesheet" href="./css/style.css">
```

Add the following code to your `style.css` file:

```css
body {
  background-color: lightsalmon;
  margin: 0px;
  font-family: system-ui, sans-serif;
}
```

Open the `index.html` file in your browser. When you open the page, the background color should be the `lightsalmon` color specified above.
