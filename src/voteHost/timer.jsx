import React, { useState, useEffect, useRef } from 'react';

export function CountdownTimer({ initialSeconds, onTimeUp }) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);
  const timeUpCalled = useRef(false); // track if onTimeUp has already fired

  useEffect(() => {
    if (secondsLeft <= 0) {
      if (!timeUpCalled.current && typeof onTimeUp === 'function') {
        onTimeUp();
        timeUpCalled.current = true; // prevent future calls
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
        <h3>Voting in progress: {secondsLeft} seconds left</h3>
      ) : (
        <h3>Times up! these players didn't make the cut</h3>
      )}
    </div>
  );
}
