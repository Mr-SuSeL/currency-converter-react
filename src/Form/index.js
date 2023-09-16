import {
  Fieldset,
  StyledForm,
  Exchange,
  Legend,
  StyledInput,
  Label,
  Select,
  Button,
} from "./styled";
import { useState } from "react";
import { currencies } from "../currencies";
import { Outcome } from "../Outcome";

const Form = ({ calcResult, result }) => {
  const [number, setNumber] = useState("");
  const [currency, setCurrency] = useState(currencies[0].code);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calcResult(currency, number);
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>Konwerter Walut</Legend>
        <p>
          <label>
            <span>Kwota w PLN:</span>

            <StyledInput
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
            <Label>Waluta do wymiany:</Label>
            <Select
              value={currency}
              onChange={(event) => setCurrency(event.target.value)}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              ))}
            </Select>
          </label>
        </p>
        <Button>Oblicz</Button>
        <Exchange>Kursy pochodzą z Google z dn. 12.09.2023</Exchange>
        <Outcome result={result} />
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
