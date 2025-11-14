import React, {useContext} from 'react';

import Button from 'react-bootstrap/Button';
import { GameContext } from '../GameContext.jsx';
import { useNavigate } from 'react-router-dom';

export function Join(props) {
  let navigate = useNavigate();
  const {gameCode, setGameCode} = useContext(GameContext);

  async function sendCodeToBackend() {
    await fetch("/api/gamecode", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: gameCode }),
    });

    navigate('/wait');
  }

  return (
    <main className="home container-fluid text-center">
      <div>
        <div  className="TopLogo"><img width="400px" src="OutOfLineLogo.png" alt="random" /></div>
        <h1>Game Code</h1>
        <div className="input-group mb-3">
          <span className="input-group-text">🖌️</span>
          <input className="form-control" type="game room code" placeholder="enter code" value={gameCode} onChange={(e) => setGameCode(e.target.value)}/>
        </div>
        
        <Button variant='primary' onClick={sendCodeToBackend}>
          Join room
        </Button>
      </div>
    </main>
  );
}