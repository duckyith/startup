import React, {useState, useContext, useEffect} from 'react';

import { GameContext } from '../GameContext.jsx';

import { useNavigate } from 'react-router-dom';

export function Host() {
  let navigate = useNavigate();
  const {gameCode, players, setPlayers, doodlers, setDoodlers, setRound} = useContext(GameContext);
  
  React.useEffect(() => {
    // Simulate players joining
    let randomsJoining = true;
    const addRandomPlayer = () => {
      if (!randomsJoining) return;
      setPlayers(prev => [...prev, `Player${prev.length + 1}`]);
      const nextDelay = Math.floor(Math.random() * (1000 - 10000 + 1)) + 10000; // A new player joins every 2-5 seconds
      setTimeout(() => {addRandomPlayer();}, nextDelay);
    };
    addRandomPlayer();
    return () => { randomsJoining = false; };
  }, []);

  return (
    <main>
      <div id="picture" className="picture-box"><img width="400px" src="OutOfLineLogo.png" alt="random" /></div>
      <h2 className="GameRoom">
        Hosting Game
      </h2>
      <div className="GameRoom">
        Game Room Code:
        <span className="GameCode"> {gameCode}</span>
      </div>
      <div className="playerlist_container">
        <p className="playerlist_title">
          Players in Room:
        </p>
        <ul className="players list">
          {players.map((player, index) => (
            <li key={index} className="player-name">{player} Joined!</li>
          ))}
        </ul>
      </div>
      <div className="player-count">
        <span className="label">Players in Room:</span>
        <span id="playerCount"> {players.length}</span>
      </div>

      <br />
      <div>
        <div>
          <button className="btn btn-primary" onClick={() => {
            setRound(1);
            const tempPlayers = [...players];
            const tempDoodlers = [];
            tempPlayers.sort(() => Math.random() - 0.5); // Shuffle players
            let totalPlayers = tempPlayers.length;
            let doodlerCount = Math.max(1, Math.floor(totalPlayers / 3));
            for (let i = 0; i < doodlerCount; i++) {
              tempDoodlers.push(tempPlayers[i]);
            }
            setDoodlers(tempDoodlers);
            console.log("Doodlers:", doodlers);
            navigate('/waitHost')}}>START!</button>
        </div>
      </div>
      <br />
    </main>
  );
}