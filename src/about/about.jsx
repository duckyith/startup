import React from 'react';

export function About() {
  return (
    <main class="about">
      <div id="picture" class="picture-box"><img width="400px" src="OutOfLineLogo.png" alt="random" /></div>
      <div class="image-row"> 
        <img src="examplePlaceholder1.png"></img>
        <img src="examplePlaceholder2.png"></img>
        <img src="examplePlaceholder3.png"></img>
      </div>
      <p>
        It's the ART of DECEPTION! Litterally! In this game a croud of people, or just a few friends get together to speed
        draw from a prompt. But be carful! Some of your friends are missing part of the prompt and have to make it up as
        they go. Can you spot the skethcy culprits and vote them out? Or stay hidden as one of the undercover doodlers?
        Whatever happens, don't get caught... Out of Line!
      </p>
      <h2>How to Play</h2>
      <p>
        The host will gives players a code to join their game and starts it when everyone's in. 1 third of the players will
        be selected as the "doodlers" and the rest will be the "Artists." Every Artist will see 3 words on their screen and
        start drawing. The doodlers will only get 2 of the words and will have to guess the last one by peeking at those
        around them or making their drawing look vague. After time is up players vote on one of 3 drawings they're shown,
        one of them belonging to a doodler. The most voted drawing gets booted from the game and play is repeated till all
        doodlers have been caught or all the rounds have been played and the doodlers are still among the Artists.
      </p>
      <div id="picture" class="picture-box"><img width="400px" src="AllScreens.png" alt="random" /></div>
    </main>
  );
}