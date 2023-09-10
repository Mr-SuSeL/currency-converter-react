import "./style.css";

export const Outcome = ({ result }) => (
  <p>
    {result !== undefined && (
      <>
        {result.fromAmount.toFixed(2)}
        PLN=
        <strong>
          {result.toAmount.toFixed(2)}
          {result.currency}
        </strong>
      </>
    )}
  </p>
);
