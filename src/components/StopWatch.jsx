import  { useState, useRef } from 'react';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);  // setInterval ka reference

  const startTimer = () => {
    if (timerRef.current !== null) return; // prevent multiple intervals
    timerRef.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setTime(0);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>⏱️ Stopwatch: {time} sec</h1>
      <button onClick={startTimer}>▶ Start</button>
      <button onClick={stopTimer}>⏹ Stop</button>
      <button onClick={resetTimer}>🔄 Reset</button>
    </div>
  );
}

export default Stopwatch;
