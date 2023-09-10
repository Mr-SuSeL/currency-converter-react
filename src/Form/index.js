import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";

const Form = () => {
  const [number, setNumber] = useState("");
  const [currency, setCurrency] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type="number"
          value={number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <select
          value={currency}
          onChange={(event) => setNumber(event.target.value)}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>CHF</option>
          <option>GBP</option>
        </select>
        <button>Oblicz</button>
      </form>
    </>
  );
};

export default Form;
