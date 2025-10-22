import React, { createContext, useState } from 'react';

export const GameContext = createContext();
//This is the context full of variables and lists that
//will be used throughout all the other game components

export function GameProvider({ children }) {
  const [players, setPlayers] = useState([]);
  const [doodlers, setDoodlers] = useState([]);
  const [gameCode, setGameCode] = useState(Math.floor(Math.random() * (1000 - 9999 + 1)) + 9999);
  const [eliminatedPlayers, setEliminatedPlayers] = useState([]);
  const [round, setRound] = useState(1);
  const [imagesList, setImagesList] = useState(['examplePlaceholder1.png', 'examplePlaceholder2.png', 'examplePlaceholder3.png']);

  return (
    <GameContext.Provider value={{ players, setPlayers,
      gameCode, setGameCode, 
      eliminatedPlayers, setEliminatedPlayers,
      doodlers, setDoodlers,
      round, setRound,
      imagesList, setImagesList }}>
      {children}
    </GameContext.Provider>
  );
}
