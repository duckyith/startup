import React from 'react';

export function Wait() {
  return (
    <main>
      <div class="GameRoom">
        Game Room Code:
        <span class="GameCode">3Q8H</span>
      </div>
      <h2>Look at the Host Screen or doodle while you wait</h2>
      <canvas id="pad" width="400" height="300" style="border:1px solid black; cursor:crosshair;"></canvas>
      <div class="canvas_button_group">
        <button class="btn btn-secondary" type="button">Clear</button>
        <button class="btn btn-secondary" type="button">Erase</button>
        <button class="btn btn-secondary" type="button">Draw</button>
        <button class="btn btn-secondary" type="button">Undo</button>
      </div>
      <br />
      <div class="GameRoom">
        Waiting for host to start the game...
      </div>
      <form method="get" action="play.html">
        <div>
          <button class="btn">click to advance: temp for testing</button>
        </div>
      </form>
    </main>
  );
}