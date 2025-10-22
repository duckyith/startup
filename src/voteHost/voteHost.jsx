import React, {useContext} from 'react';

import { useNavigate } from 'react-router-dom';
import { CountdownTimer } from '../voteHost/timer';
import { GameContext } from '../GameContext.jsx';

export function VoteHost() {
  let navigate = useNavigate();
  const {players, setPlayers, round, setRound, doodlers, setDoodlers, eliminatedPlayers, setEliminatedPlayers} = useContext(GameContext);

  const [showFirstList, setShowFirstList] = React.useState(true);
  const [showSecondList, setShowSecondList] = React.useState(false);

  const eliminate = () => {// simulate eliminations (in a real game, we take the top (eliminated count) number of voted players )
    const tempPlayers = [...players];
    const tempEliminatedPlayers = [...eliminatedPlayers];
    tempPlayers.sort(() => Math.random() - 0.5); // Shuffle players
    let eliminatedCount = Math.max(0, Math.floor(tempPlayers.length / 3)+1);
    for (let i = 0; i < eliminatedCount; i++) {
      const eliminatedPlayer = tempPlayers.shift(); // remove from active players
      tempEliminatedPlayers.push(eliminatedPlayer);
      setDoodlers(prevDoodlers => prevDoodlers.filter(d => d !== eliminatedPlayer))
    }
    setEliminatedPlayers(tempEliminatedPlayers);
    setPlayers(tempPlayers);
    console.log("Eliminated players:", tempEliminatedPlayers);
    console.log("Remaining players:", tempPlayers);
  };

  const secondList = () => {
    eliminate();
    setShowFirstList(false);
    setShowSecondList(true);
  }
  
  return (
    <main>
      <h2>Round {round} has concluded</h2>
      <CountdownTimer
            initialSeconds={15}
            onTimeUp={secondList}/>
      <div className="playerlist_container">
      {showFirstList && (
        <div>
        <p className="playerlist_title">
          Players Left! ({doodlers.length} doodlers remains)
        </p>
        <ul className= "players list">
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
        </div>
      )}
      {showSecondList && (
        <div>
          <p className="playerlist_title">
          see ya! ({doodlers.length} doodlers remains)
        </p>
        <ul className= "players list">
          {eliminatedPlayers.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
        </div>
      )}
      </div>
      <div className="image-row">
        <img src="examplePlaceholder1.png"></img>
        <img src="examplePlaceholder2.png"></img>
        <img src="examplePlaceholder3.png"></img>
      </div>
        <div>
          <button className="btn btn-primary" onClick={() => {
            setRound(prev => prev + 1);
            navigate('/waitHost')}}>start next round</button>
        </div>
      </main>
  );
}