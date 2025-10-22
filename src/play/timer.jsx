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
  }, [secondsLeft]);

  return <h2>Time left: {secondsLeft} seconds</h2>;
}
