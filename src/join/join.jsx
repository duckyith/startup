import React, {useContext} from 'react';

import { useNavigate } from 'react-router-dom';
import { GameContext } from '../GameContext';

export function Join() {
  let navigate = useNavigate();
  const { gameCode, setGameCode, username, setUsername } = useContext(GameContext);

  return (
    <main className="home container-fluid text-center">
      <div id="picture" className="picture-box"><img width="400px" src="OutOfLineLogo.png" alt="random" /></div>
      <div>
        <h1>Login</h1>
        <div method="get" action="wait.html">
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input className="form-control" type="text" placeholder="your@email.com" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🔒</span>
            <input className="form-control" type="password" placeholder="password" />
          </div>
        </div>
        <h1>Game Username & Code</h1>
        <div>
          <div className="input-group mb-3">
            <span className="input-group-text">👤</span>
            <input className="form-control" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🖌️</span>
            <input className="form-control" type="game room code" placeholder="enter code" value={gameCode} onChange={(e) => setGameCode(e.target.value)}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={() => navigate('/wait')}>Join</button>
          <button type="submit" className="btn btn-" onClick={() => navigate('/wait')}>Create Account</button>
        </div>
      </div>
    </main>
  );
}