# CS 260 Notes (changed)

MY NOTES
I'm still cautious about what I should change in all these documents and just kind of throwing myself into the deepend here but I learned a couple things from this. Most notably:

## Commands

Git commands
- git clone (url) -> to copy repository
- git add
- git commit
- git push
- git fetch
- git status
- git pull
and some general concepts of how to clone and use the repositories

Console commands:
- chmod - change permissions,
- pwd - print working directory
- cd - change directory
- ls - list files
- vim/nano - text editors
- mkdir - make directory
- mv - move/rename
- rm - remove
- man - manual
- ssh - remote shell
- ps - processes
- wget - download files
- sudo - run as admin
(-l flag: list with more info, -a flag: list hidden as well)

[My startup - Out Of Line](https://startup.outofline.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.235.224.131
Impotant AWS Pages: Instances | EC2

banana.fruit.bozo.click <- example domain
TLD (Top level domain): .click, root domain: bozo.click, subdomain: fruit.bozo.click (and banana.fruit.bozo.click is a nested
subdomain)

HTTPS requires a valid SSL/TLS certificate. Securing your website is a good idea.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

Okay so I very cautiously changed the code in my simon sub directory for the first time and I was scared to death but I did it and still have all my limbs. looks like it works and now I'm off to get the startup portion to work! The most important command here is the deploy files
./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon

<!DOCTYPE html> 
to make it an html file
<meta charset="UTF-8">
meta data that can tell devices we've considered them and will take care of the formatting, this example says we use the character set of UTF - 8
<link rel="stylesheet" href="style.css">
to use a CSS file for formatting this page

## CSS

Cascading Style Sheets as the name suggests, applys a high level component's properties to all following elements. The last instructing for styling will take presidence.

flex is mega important for centering things in ways that change with the browser size, very important if you want your website to look good on all different sized divices

#message{
  This is like getElementByID in JS, add your styling here
}
.div{
  The dot is for classes,  even tho if this is second, the ID is more   specific and will take priority
}

## JS

<script src="counter.js"></script>

The following JS code takes an element made in an html file and modifys it under certain conditions. Message in the html file is an empty p element which will keep it hidden until the message is modified by the JS to have text and style it to a green color. This change happens on the Event "submit", there are others like onChange and click.

```js
const message = document.getElementByID("message");
form.addEvenListener("submit", (e) => (
  const email = document.getElementById('email').value
  if (email.includes('@')) {
    message.textContent = "email accepted"
    message.style.color = 'green'
  }
```
2  examples of the same function (in both cases you have to have an ID'd element recognized first
.addEventListener("click", () => {}
.onclick = () => {}

## React Part 1: Routing

Setting up the files so that Vite can "compile" (not really but like but it together) the html, css and java script for the browser. I really like the new orginization, makes a lot more sense but it's a shame I have to reconfigure so much.

Important commands:
(note, you'll need node.js to run npm commands)

npm init -y
npm install vite@latest -D
npm install bootstrap react-bootstrap
npm install react react-dom react-router-dom

npm run dev
(dev is a script we made in package.json which runs vite)
o to enter browser

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```

## End points and APIs

node commands
- npm init -y
- npm install express
- npm install cookie-parser bcryptjs uuid
- npm run dev (o to render, q to quit)

running the server
- node index.js & (& means background)
- fg (bring to foreground to ctrl+c to kill)
- host=http://localhost:3000 (I think this means connect to whatever is on port 3000)
- also you can press f5 in vs code to run index.js and then run vite to simulate it. (npm run dev (o to render, q to quit))


# CS260 – Midterm Review Notes

This document summarizes all key topics likely to appear on the midterm.  
Each question is restated and followed by a clear, concise answer or example.

---

## 1. In the following code, what does the `<link>` element do?

It links an external resource (usually a CSS file) to your HTML document.

```html
<link rel="stylesheet" href="style.css">
```
Placed inside the `<head>` section.

---

## 2. In the following code, what does a `<div>` tag do?

Defines a *division* or container for grouping other HTML elements.  
It’s a **block-level** element used for layout or styling.

---

## 3. In the following code, what is the difference between the `#title` and `.grid` selector?

- `#title` selects an element with **id="title"** (only one per page).  
- `.grid` selects **all elements** with **class="grid"**.

---

## 4. In the following code, what is the difference between padding and margin?

- **Padding:** space **inside** the border (between content and border).  
- **Margin:** space **outside** the border (between border and other elements).

---

## 5. Given this HTML and CSS, how will the images be displayed using flex?

When using:
```css
display: flex;
```
Child elements (like images) are placed in a row by default.  
You can adjust:
- `flex-direction` for row/column  
- `justify-content` for horizontal alignment  
- `align-items` for vertical alignment

---

## 6. What does the following padding CSS do?

```css
padding: 10px 20px;
```
Top/bottom = 10px  
Left/right = 20px

---

## 7. What does the following code using arrow syntax function declaration do?

```js
const add = (a, b) => a + b;
```
Defines a function using arrow syntax.  
If written on one line without braces, it returns the result automatically.

---

## 8. What does the following code using `map` with an array output?

```js
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```
Creates a new array with each element transformed.

---

## 9. What does the following code output using `getElementById` and `addEventListener`?

```js
document.getElementById("btn").addEventListener("click", () => console.log("clicked"));
```
Adds an event listener so that when the element with id="btn" is clicked, it logs `"clicked"` to the console.

---

## 10. What does the following line of JavaScript do using a `#` selector?

```js
document.querySelector("#title");
```
Selects the element with id="title".

---

## 11. Which of the following are true about the DOM?

- HTML is represented as a **tree of nodes**.  
- JavaScript can **modify structure, content, and styles**.  
- The `document` object is the root of the DOM.

---

## 12. By default, the HTML `<span>` element has what CSS display property?

`display: inline;`

---

## 13. How would you use CSS to change all the `<div>` elements to have a background color of red?

```css
div {
  background-color: red;
}
```

---

## 14. How would you display an image with a hyperlink in HTML?

```html
<a href="https://example.com">
  <img src="image.jpg" alt="description">
</a>
```

---

## 15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

**content → padding → border → margin**

---

## 16. Given the following HTML, what CSS would you use to set the text "trouble" to green and leave "double" unaffected?

```html
<p>double <span class="green">trouble</span></p>
```
```css
.green {
  color: green;
}
```

---

## 17. What will the following code output when executed using a for loop and `console.log`?

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

**Output:**
```
0
1
2
```

---

## 18. How would you use JavaScript to select an element with the id of “byu” and change the text color to green?

```js
document.getElementById("byu").style.color = "green";
```

---

## 19. What are the opening HTML tags for common elements?

| Element Type | Opening Tag |
|---------------|--------------|
| Paragraph | `<p>` |
| Ordered list | `<ol>` |
| Unordered list | `<ul>` |
| First-level heading | `<h1>` |
| Second-level heading | `<h2>` |
| Third-level heading | `<h3>` |

---

## 20. How do you declare the document type to be HTML?

```html
<!DOCTYPE html>
```

---

## 21. What is valid JavaScript syntax for if, else, for, while, and switch statements?

```js
if (x > 0) { ... } else { ... }
for (let i = 0; i < 5; i++) { ... }
while (x < 10) { ... }
switch(value) {
  case 1: ...; break;
}
```

---

## 22. What is the correct syntax for creating a JavaScript object?

```js
let car = { make: "Toyota", year: 2020 };
```

---

## 23. Is it possible to add new properties to JavaScript objects?

✅ Yes:
```js
car.color = "red";
```

---

## 24. If you want to include JavaScript on an HTML page, which tag do you use?

```html
<script src="script.js"></script>
```

---

## 25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

```html
<p id="animal">fish</p>
```
```js
document.getElementById("animal").textContent = "crow";
```

---

## 26. Which of the following correctly describes JSON?

JSON (JavaScript Object Notation) is a lightweight data format that uses key/value pairs.

Example:
```json
{
  "name": "Tom",
  "age": 25
}
```

---

## 27. What do the following console commands do?

| Command | Description |
|----------|-------------|
| `chmod` | Change file permissions |
| `pwd` | Print working directory |
| `cd` | Change directory |
| `ls` | List files |
| `vim`, `nano` | Text editors |
| `mkdir` | Make directory |
| `mv` | Move or rename |
| `rm` | Remove file |
| `man` | Manual/help |
| `ssh` | Remote shell session |
| `ps` | Show running processes |
| `wget` | Download files |
| `sudo` | Run as superuser |

---

## 28. Which console command creates a remote shell session?

✅ `ssh`

---

## 29. Which of the following is true when the `-la` parameter is specified for the `ls` command?

`ls -la` lists **all** files, including hidden ones, with detailed info such as permissions, owner, and size.

---

## 30. For the domain `banana.fruit.bozo.click`, which parts are which?

- **Top-level domain (TLD):** `.click`  
- **Root domain:** `bozo.click`  
- **Subdomains:** `fruit`, `banana`

---

## 31. Is a web certificate necessary to use HTTPS?

✅ Yes — HTTPS requires a valid SSL/TLS certificate.

---

## 32. Can a DNS A record point to another A record?

❌ No — an A record must point to an IP address.

---

## 33. Ports 443, 80, and 22 are reserved for which protocols?

| Port | Protocol |
|------|-----------|
| 443 | HTTPS |
| 80 | HTTP |
| 22 | SSH |

---

## 34. What will the following code using Promises output when executed?

```js
Promise.resolve("done").then(console.log);
```

**Output:**
```
done
```

---

# ✅ End of Review
Study each concept carefully and make sure you understand both the syntax and what happens at runtime.
