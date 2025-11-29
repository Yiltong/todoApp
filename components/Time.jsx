import React, { useState, useEffect, useRef } from "react";


export default function AlarmCountdown() {
  const [time, setTime] = useState(0);
  const [countdown, setCountdown] = useState(0);
  const [running, setRunning] = useState(false);
  const [alarmTriggered, setAlarmTriggered] = useState(false);
  const intervalRef = useRef(null);

  const audioRef = useRef(
    new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg")
  );

  useEffect(() => {
    if (running && countdown > 0) {
      intervalRef.current = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && running) {
      setRunning(false);
      setAlarmTriggered(true);
      audioRef.current.play();
    }

    return () => clearInterval(intervalRef.current);
  }, [running, countdown]);

  const startTimer = () => {
    if (time > 0) {
      setCountdown(time);
      setRunning(true);
      setAlarmTriggered(false);
    }
  };

  const stopTimer = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const resetTimer = () => {
    stopTimer();
    setCountdown(0);
    setTime(0);
    setAlarmTriggered(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  return (
    <div className="head">
      <h2 className="alarm">Alarm !!!</h2>

      <div className="count-display">
        {countdown > 0 ? countdown : "00"}s
      </div>

      <div className="button-group">
        <button
          onClick={startTimer}
          className={`btn start-btn ${alarmTriggered ? "alarm-active" : ""}`}
          disabled={running}
        >
          {alarmTriggered ? "ALARM!" : "Start"}
        </button>

        <button onClick={stopTimer} className="btn stop-btn">
          Stop
        </button>

        <button onClick={resetTimer} className="btn reset-btn">
          Reset
        </button>
      </div>

      <input
        type="number"
        min="0"
        placeholder="Enter seconds..."
        value={time}
        onChange={(e) => setTime(Number(e.target.value))}
        className="input-box"
      />

      {alarmTriggered && (
        <p className="alarm-text">⛔ Time’s up! Alarm ringing...</p>
      )}
    </div>
  );
}




