import { useState, useEffect } from "react";
import "./style.css";

const Timer = () => {
  const [date, setDate] = useState(new Date(Date));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="timer__date">
      Dzisiaj jest:{" "}
      {date.toLocaleString("pl-PL", {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        day: "numeric",
        month: "long",
        timeZone: "UTC",
      })}
    </p>
  );
};

export default Timer;
