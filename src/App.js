import React, { useState } from "react";
import "./App.css";
import Container from "./Container";
import Form from "./Form";
import { currencies } from "./currencies";

function App() {
  const [result, setResult] = useState();

  const calcResult = (currency, amount) => {
    const rate = currencies.find(({ code }) => code === currency).rate;

    setResult({
      fromAmount: +amount,
      toAmount: amount / rate,
      currency,
    });
  };

  return (
    <Container>
      <h1>Currency Converter</h1>
      <Form result={result} calcResult={calcResult} />
      {/* <Form result={result} calcResult={calcResult} /> */}
    </Container>
  );
}

export default App;
