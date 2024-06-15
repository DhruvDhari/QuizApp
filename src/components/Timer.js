import React, { useEffect, useState } from 'react';

const Timer = ({ initialTime, onTimeUp }) => {
  const [time, setTime] = useState(() => {
    const savedTimer = parseInt(localStorage.getItem('timer'), 10);
    return !isNaN(savedTimer) ? savedTimer : initialTime;
  });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timerInterval);
          onTimeUp();
          return 0;
        }
        const newTime = prevTime -1;
        localStorage.setItem('timer', newTime); // Save remaining time to localStorage
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [onTimeUp]);

  return (
    <div>
      <p>Time remaining: {Math.floor(time / 60)}:{time % 60 < 10 ? '0' + (time % 60) : time % 60}</p>
    </div>
  );
};

export default Timer;
