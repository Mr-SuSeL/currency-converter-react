import "./style.css";
import { useState } from "react";
import { currencies } from "../currencies";
import { Outcome } from "../Outcome";

const Form = ({ calcResult, result }) => {
  const [number, setNumber] = useState("");
  const [currency, setCurrency] = useState(currencies[0].code); //daj: ""

  const onFormSubmit = (event) => {
    event.preventDefault();
    calcResult(currency, number);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <p>
          <label>
            <span>Kwota w PLN:</span>

            <input
              type="number"
              placeholder="Wpisz kwotę w PLN"
              required
              value={number}
              onChange={(event) => setNumber(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            <span>Waluta do wymiany:</span>
            <select
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              ))}

              {/* <option>USD</option>
              <option>EUR</option>
              <option>CHF</option>
              <option>GBP</option> */}
            </select>
          </label>
        </p>
        <button>Oblicz</button>
        <p>Kursy pochodzą z Google z dn. 10.09.2023</p>
        {/* Result: */}
        {/* <Result result={result} /> */}

        <Outcome result={result} />
      </form>
    </>
  );
};

export default Form;
