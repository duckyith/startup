import React from 'react';

export function Host() {
  return (
    <main>
      <div id="picture" class="picture-box"><img width="400px" src="OutOfLineLogo.png" alt="random" /></div>
      <h2 class="GameRoom">
        Hosting Game
      </h2>
      <div class="GameRoom">
        Game Room Code:
        <span class="GameCode">3Q8H</span>
      </div>
      <div class="playerlist_container">
        <p class="playerlist_title">
          Players in Room:
        </p>
        <ul class="players list">
          <li class="player-name">iLikeToDraw Joined!</li>
          <li class="player-name">PLEASEDONTVOTEME Joined!</li>
          <li class="player-name">SillySamon Joined!</li>
          <li class="player-name">PeePeePooPoo Joined!</li>
          <li class="player-name">Dad Joined!</li>
          <li class="player-name">Johnny Joined!</li>
        </ul>
      </div>
      <div class="player-count">
        <span class="label">Players in Room:</span>
        <span id="playerCount">6</span>
      </div>

      <br />
      <form method="get" action="waitHost.html">
        <div>
          <button class="btn btn-primary">START!</button>
        </div>
      </form>
      <br />
    </main>
  );
}