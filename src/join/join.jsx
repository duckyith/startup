import React, {useContext} from 'react';

import Button from 'react-bootstrap/Button';
import { GameContext } from '../GameContext.jsx';
import { useNavigate } from 'react-router-dom';

export function Join(props) {
  let navigate = useNavigate();
  const {gameCode, setGameCode} = useContext(GameContext);

  return (
    <main className="home container-fluid text-center">
      <div>
        <div  className="TopLogo"><img width="400px" src="OutOfLineLogo.png" alt="random" /></div>
        <h1>Game Code</h1>
        <div className="input-group mb-3">
          <span className="input-group-text">🖌️</span>
          <input className="form-control" type="game room code" placeholder="enter code" value={gameCode} onChange={(e) => setGameCode(e.target.value)}/>
        </div>
        
        <Button variant='primary' onClick={() => navigate('/wait')}>
          Join room
        </Button>
      </div>
    </main>
  );
}