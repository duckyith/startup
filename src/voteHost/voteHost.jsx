import React from 'react';

export function VoteHost() {
  return (
    <main>
      <h2>Round 2 has concluded</h2>
      <h3>
        voting in progress!
      </h3>
      <div class="playerlist_container">
        <p class="playerlist_title">
          Players Left! (1 doodler remains)
        </p>
        <ul class="players list">
          <li class="player-name">iLikeToDraw</li>
          <li class="player-name">SillySamon</li>
          <li class="player-name">PeePeePooPoo</li>
          <li class="player-name">Dad</li>
          <li class="player-name">Johnny</li>
        </ul>
      </div>
      <div class="image-row">
        <img src="examplePlaceholder1.png"></img>
        <img src="examplePlaceholder2.png"></img>
        <img src="examplePlaceholder3.png"></img>
      </div>
      <form method="get" action="waitHost.html">
        <div>
          <button class="btn">click to advance: temp for testing</button>
        </div>
      </form>
    </main>
  );
}