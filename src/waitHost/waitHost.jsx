import React from 'react';

export function WaitHost() {
  return (
    <main>
      <h2>Round 2 has started</h2>
      <h3>
        10 Seconds left!
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
      <div class="playerlist_container">
        <p class="playerlist_title">
          Players Voted out!
        </p>
        <ul class="players list">
          <li class="player-name">PLEASEDONTVOTEME was voted out on round 1!</li>
        </ul>
      </div>
      <form method="get" action="voteHost.html">
        <div>
          <button class="btn">click to advance: temp for testing</button>
        </div>
      </form>
    </main>
  );
}