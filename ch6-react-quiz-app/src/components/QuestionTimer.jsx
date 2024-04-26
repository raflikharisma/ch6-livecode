import React, { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime((prevRemainingTime) => {
        if (prevRemainingTime <= 0) {
          clearInterval(intervalId);
          onTimeout();
          return 0;
        }
        return prevRemainingTime - 100;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [timeout, onTimeout]);

  useEffect(() => {
    setRemainingTime(timeout);
  }, [timeout, onTimeout]);

  return <progress id="question" max={timeout} value={remainingTime}></progress>;
}
