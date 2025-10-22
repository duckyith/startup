import React, { useState } from 'react';

import { CountdownTimer } from './timer';

export function VotePanel() {
  const images = ['examplePlaceholder1.png', 'examplePlaceholder2.png', 'examplePlaceholder3.png'];
  const [imageUrls, setImageUrls] = useState(images);
  const [votes, setVotes] = useState([]);
  
  const [showButtons, setShowButtons] = useState(true);

  const randomImage = () => images[Math.floor(Math.random() * images.length)];

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
        {imageUrls.map((url, index) => (
          <img key={index} src={url} alt={`Option ${index + 1}`} />
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
