import React from 'react';

export function Play() {
  return (
    <main>
      <h2>Round 1</h2>
      <h3>The promps are:</h3>
      <div class="prompts_container">
        <span class="prompt" id="prompt1">Pirate</span>
        <span class="prompt" id="prompt2">Mountain</span>
        <span class="prompt" id="prompt3">???</span>
      </div>
      <canvas id="pad" width="400" height="300" style="border:1px solid black; cursor:crosshair;"></canvas>
      <div class="canvas_button_group">
        <button class="btn btn-secondary" type="button">Clear</button>
        <button class="btn btn-secondary" type="button">Erase</button>
        <button class="btn btn-secondary" type="button">Draw</button>
        <button class="btn btn-secondary" type="button">Undo</button>
      </div>
      <h3>Time remaining: 10 seconds!</h3>
      <form method="get" action="vote.html">
        <div>
          <button class="btn">click to advance: temp for testing</button>
        </div>
      </form>
    </main>
  );
}