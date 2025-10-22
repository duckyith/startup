import React, { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

export function CountdownTimer({ initialSeconds }) {
  let navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0){
        navigate('/voteHost')
        return;
    }
    const timer = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft]);

  return <h3>Time left: {secondsLeft} seconds</h3>;
}
