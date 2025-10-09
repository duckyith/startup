# CS 260 Notes (changed)

MY NOTES
I'm still cautious about what I should change in all these documents and just kind of throwing myself into the deepend here but I learned a couple things from this. Most notably:
The commands
- git add
- git commit
- git push
- git fetch
- git status
- git pull
and some general concepts of how to clone and use the repositories

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.235.224.131
Impotant AWS Pages: Instances | EC2

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

Okay so I very cautiously changed the code in my simon sub directory for the first time and I was scared to death but I did it and still have all my limbs. looks like it works and now I'm off to get the startup portion to work! The most important command here is the deploy files
./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s simon

## CSS

Cascading Style Sheets as the name suggests, applys a high level component's properties to all following elements. The last instructing for styling will take presidence.

flex is mega important for centering things in ways that change with the browser size, very important if you want your website to look good on all different sized divices

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
