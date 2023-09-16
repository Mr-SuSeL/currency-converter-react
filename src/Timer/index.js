import { StyledTimer } from "./styled";
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
  return <StyledTimer>Dzisiaj jest: {actualDate(date)}</StyledTimer>;
};

export default Timer;
