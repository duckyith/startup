import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [doodlers, setDoodlers] = useState([]);
  const [gameCode, setGameCode] = useState(Math.floor(Math.random() * (1000 - 9999 + 1)) + 9999);
  const [eliminatedPlayers, setEliminatedPlayers] = useState([]);
  const [round, setRound] = useState(1);

  return (
    <GameContext.Provider value={{ players, setPlayers,
     gameCode, setGameCode, 
     eliminatedPlayers, setEliminatedPlayers,
     doodlers, setDoodlers,
     round, setRound }}>
      {children}
    </GameContext.Provider>
  );
}
