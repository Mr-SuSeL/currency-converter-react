import "./style.css";
import { useCurrentDate } from "./useCurrentDate";

const actualDate = (date) => 
  date.toLocaleString("pl-PL", {
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  day: "numeric",
  month: "long",
  timeZone: "UTC",
});


const Timer = () => {
  const date = useCurrentDate();

  return (
    <p className="timer__date">
      Dzisiaj jest:{" "}
      {actualDate(date)}
    </p>
  );
};

export default Timer;
