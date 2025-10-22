import React, { useState, useContext } from 'react';

import { CountdownTimer } from './timer';
import { GameContext } from '../GameContext.jsx';

export function VotePanel() {
  const { imagesList, setImagesList } = useContext(GameContext);
  const [images, setImageUrls] = useState([imagesList[0], imagesList[1], imagesList[2]]);
  const [votes, setVotes] = useState([]);
  
  const [showButtons, setShowButtons] = useState(true);

  const randomImage = () => imagesList[Math.floor(Math.random() * imagesList.length)];
  //When this is all real, instead of choosing a random image from our full list
  //we'll shuffle a copy of the list once and compare the vote list to that
  //if we mod the shuffled list by 3 we should be able to count who got the most votes
  const newImages = () => setImageUrls([randomImage(), randomImage(), randomImage()]);

  const handleVote = (choice) => {
    setVotes([...votes, choice]);
    newImages();
  };

  const hideVoteButtons = () => {
    setShowButtons(false);
    console.log("Final votes:", votes);
  };

  return (
    <div className="VotePanel">
      <div className="image-row">
        {images.map((url, index) => (
          <img className= "voteImages" key={index} src={url} alt={`Option ${index + 1}`} />
        ))}
      </div>

      {showButtons && (
        <div className="vote_button_group">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className="btn btn-primary"
              type="button"
              onClick={() => handleVote(i + 1)}
            >
              VOTE
            </button>
          ))}
        </div>
      )}

      <p id="votes">totalVotes: {votes.length}</p>
      
      <CountdownTimer
      initialSeconds={15}
      onTimeUp={hideVoteButtons}/>
    </div>
  );
}
