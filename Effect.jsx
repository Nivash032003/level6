import React, { useEffect } from 'react';

const TimerComponent = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Timer tick');
    }, 1000);

    return () => {
      clearInterval(intervalId);
      console.log('Timer cleared');
    };
  }, []);

  return (
    <div>
      <p>Check the console to see the timer logs.</p>
    </div>
  );
};

export default TimerComponent;
