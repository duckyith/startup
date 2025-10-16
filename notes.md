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
