import {
  Fieldset,
  StyledForm,
  Exchange,
  Legend,
  StyledInput,
  Label,
  Select,
  Button,
  LoadingMessage,
  ErrorMessage,
  SuccessMessage,
} from "./styled";
import { useState, useEffect } from "react";
import { Outcome } from "../Outcome";
import { useExchangeRates } from "./useExchangeRates";

const Form = () => {
  const [number, setNumber] = useState("");
  const { state, data, error } = useExchangeRates();
  const [currency, setCurrency] = useState("");
  const [result, setResult] = useState(undefined);

  useEffect(() => {
    if (
      state === "loaded" &&
      data &&
      data.data &&
      Object.keys(data.data).length > 0
    ) {
      const codes = Object.keys(data.data).filter((c) => c !== "PLN");
      setCurrency(codes[0] || "PLN");
    }
  }, [state, data]);

  const calcResult = (currency, number) => {
    if (state !== "loaded" || !data || !data.data) {
      alert("Kursy nie są jeszcze załadowane");
      return;
    }

    const rateObj = data.data[currency];
    if (!rateObj) {
      alert("Nie znaleziono kursu dla wybranej waluty");
      return;
    }
    const rate = rateObj.value;

    setResult({
      fromAmount: +number,
      toAmount: number * rate,
      currency,
    });
  };

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
              disabled={state !== "loaded"}
            >
              {state === "loading" && <option>Ładowanie walut...</option>}
              {state === "error" && <option>Wystąpił błąd: {error?.message}</option>}
              {state === "loaded" &&
                (!data || !data.data || Object.keys(data.data).length === 0) && (
                  <option>Brak dostępnych walut</option>
                )}
              {state === "loaded" &&
                data &&
                data.data &&
                Object.keys(data.data).length > 0 &&
                Object.keys(data.data).map((code) => (
                  <option key={code} value={code}>
                    {code}
                  </option>
                ))}
            </Select>
          </label>
        </p>
        <Button disabled={state !== "loaded"}>Oblicz</Button>

        {/* Komunikaty ze stylami */}
        {state === "loading" && <LoadingMessage>Ładowanie kursów...</LoadingMessage>}
        {state === "error" && <ErrorMessage>Błąd ładowania: {error?.message}</ErrorMessage>}
        {state === "loaded" && data && (
          <SuccessMessage>
            Kursy pobrane aktualne na dzień{" "}
            {new Date(data.meta.last_updated_at).toLocaleDateString()}
          </SuccessMessage>
        )}

        <Outcome result={result} />
      </Fieldset>
    </StyledForm>
  );
};

export default Form;
