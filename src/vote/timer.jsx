import React, { useState, useEffect } from 'react';

export function CountdownTimer({ initialSeconds, onTimeUp }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  React.useEffect(() => {
    if (secondsLeft <= 0){
      if (typeof onTimeUp === 'function'){
        onTimeUp();
      }
      return;
    }
    const timer = setTimeout(() => {
      setSecondsLeft(secondsLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [secondsLeft, onTimeUp]);

  return (
    <div>
      {secondsLeft > 0 ? (
        <h2>Time left: {secondsLeft} seconds</h2>
      ) : (
        <h2>Times up! look at the host screen</h2>
      )}
    </div>
  );
}
