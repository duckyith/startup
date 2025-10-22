import React, {useContext} from 'react';

import { useNavigate } from 'react-router-dom';
import { CountdownTimer } from '../waitHost/timer';
import { GameContext } from '../GameContext.jsx';

export function WaitHost() {
  let navigate = useNavigate();
  const {players, round} = useContext(GameContext);
  const {eliminatedPlayers} = useContext(GameContext);
  const {doodlers} = useContext(GameContext);

  return (
    <main>
      <h2>Round {round} has started</h2>
      <CountdownTimer initialSeconds={60} />
      <div className="playerlist_container">
        <p className="playerlist_title">
          Players Left! ({doodlers.length} doodlers remains)
        </p>
        <ul className= "players list">
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
      <div className="playerlist_container">
        <p className="playerlist_title">
          Players Voted out!
        </p>
        <ul className= "players list">
          {eliminatedPlayers.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
        <div>
          <button className="btn" onClick={() => navigate('/voteHost')}>click to advance: temp for testing</button>
        </div>
    </main>
  );
}