import React, {useContext} from 'react';

import { useNavigate } from 'react-router-dom';
import { CanvasArea } from '../wait/canvas.jsx';
import { GameContext } from '../GameContext';

export function Wait() {
  let navigate = useNavigate();
  const { gameCode } = useContext(GameContext);

  return (
    <main>
      <div className="GameRoom">
        Game Room Code:
        <span className="GameCode"> {gameCode}</span>
      </div>
      <h2>Look at the Host Screen or doodle while you wait</h2>
      <CanvasArea></CanvasArea>
      <br />
      <div className="GameRoom">
        Waiting for host to start the game...
      </div>
      <div>
        <div>
          <button className="btn" onClick={() => navigate('/play')}>click to advance: temp for testing</button>
        </div>
      </div>
    </main>
  );
}