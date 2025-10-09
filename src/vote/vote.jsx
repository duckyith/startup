import React from 'react';

export function Vote() {
  return (
    <main>
      <h2>Vote which of these were faked!</h2>
      <div class="image-row">
        <img src="examplePlaceholder1.png"></img>
        <img src="examplePlaceholder2.png"></img>
        <img src="examplePlaceholder3.png"></img>
      </div>
      <div class="vote_button_group">
        <button class="btn btn-primary" type="button">VOTE</button>
        <button class="btn btn-primary" type="button">VOTE</button>
        <button class="btn btn-primary" type="button">VOTE</button>
      </div>
      <h2>Time remaining: 10 seconds!</h2>
      <form method="get" action="play.html">
        <div>
          <button class="btn">click to advance: temp for testing</button>
        </div>
      </form>
    </main>
  );
}