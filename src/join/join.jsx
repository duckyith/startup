import React from 'react';

import { useNavigate } from 'react-router-dom';

export function Join() {
  let navigate = useNavigate();

  return (
    <main class="home container-fluid text-center">
      <div id="picture" class="picture-box"><img width="400px" src="OutOfLineLogo.png" alt="random" /></div>
      <div>
        <h1>Login</h1>
        <div method="get" action="wait.html">
          <div class="input-group mb-3">
            <span class="input-group-text">@</span>
            <input class="form-control" type="text" placeholder="your@email.com" />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text">🔒</span>
            <input class="form-control" type="password" placeholder="password" />
          </div>
        </div>
        <h1>Game Code</h1>
        <div method="get" action="wait.html">
          <div class="input-group mb-3">
            <span class="input-group-text">🖌️</span>
            <input class="form-control" type="game room code" placeholder="enter code" />
          </div>
          <button type="submit" class="btn btn-primary" onClick={() => navigate('/wait')}>Join</button>
          <button type="submit" class="btn btn-" onClick={() => navigate('/wait')}>Create Account</button>
        </div>
      </div>
    </main>
  );
}