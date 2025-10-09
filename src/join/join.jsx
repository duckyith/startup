import React from 'react';

export function Join() {
  return (
    <main class="home container-fluid text-center">
      <div id="picture" class="picture-box"><img width="400px" src="OutOfLineLogo.png" alt="random" /></div>
      <div>
        <h1>Login</h1>
        <form method="get" action="wait.html">
          <div class="input-group mb-3">
            <span class="input-group-text">@</span>
            <input class="form-control" type="text" placeholder="your@email.com" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">🔒</span>
            <input class="form-control" type="password" placeholder="password" />
          </div>
        </form>
        <h1>Game Code</h1>
        <form method="get" action="wait.html">
          <div class="input-group mb-3">
            <span class="input-group-text">🖌️</span>
            <input class="form-control" type="game room code" placeholder="enter code" />
          </div>
          <button type="submit" class="btn btn-primary">Join</button>
          <button type="submit" class="btn btn-">Create Account</button>
        </form>
      </div>
    </main>
  );
}