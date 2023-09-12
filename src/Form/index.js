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
    // <>
    <form class="form" onSubmit={onFormSubmit}>
      <fieldset class="form__fieldset">
        <legend class="form__legend">Konwerter Walut</legend>
        <p>
          <label>
            <span>Kwota w PLN:</span>

            <input
              class="form__fieldLabel"
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
            <span class="form__labelText">Waluta do wymiany:</span>
            <select
              class="form__field"
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
        <button class="form__button">Oblicz</button>
        <p class="exchangeRate__date">
          Kursy pochodzą z Google z dn. 12.09.2023
        </p>
        {/* Result: */}
        {/* <Result result={result} /> */}

        <Outcome result={result} />
      </fieldset>
    </form>
    // </>
  );
};

export default Form;
