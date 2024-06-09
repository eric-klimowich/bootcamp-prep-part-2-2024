## DOM Events - Setup

Open your Terminal and navigate to your `~/ga/lectures` directory:

```bash
cd ~/ga/lectures
```

Create a new directory named `dom-events` and enter it:

```bash
mkdir dom-events
cd dom-events
```

Inside the `dom-events` directory, make two files: `index.html` for HTML and `script.js` for Javascript:

```bash
touch index.html script.js
```

Now, open your project directory in VS Code:

```bash
code .
```

In the `index.html` file, add HTML boilerplate by typing `!` and hitting the `Tab` key. Then, link your `script.js` file by adding this line inside the `<head>` tag:

```html
<script defer src="./script.js"></script>
```

Next, let's add the following starter code inside of the `<body>` of our `index.html` file:

```html
  <h1 id="main-title">DOM Events Blog Post</h1>
  <p>DOM Events are the key to interactivity!</p>
  <div>
    <button id="like-button">Like this post!</button>
    <button id="dislike-button">Dislike this post!</button>
  </div>
```

Finally, open the `index.html` file in your browser.
