import React from 'react';

import { useNavigate } from 'react-router-dom';
import { VotePanel } from './votePanel';

export function Vote() {
  let navigate = useNavigate();
  
  return (
    <main>
      <h2>Vote which of these were faked!</h2>
      <VotePanel></VotePanel>
      <div>
        <button className="btn" onClick={() => navigate('/play')}>click to advance: temp for testing</button>
      </div>
    </main>
  );
}