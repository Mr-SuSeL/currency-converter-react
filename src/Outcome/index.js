export const Outcome = ({ result }) => (
  <p>
    {result !== undefined && (
      <>
        {result.fromAmount.toFixed(2)}&nbsp; PLN&nbsp;=&nbsp;
        <strong>
          {result.toAmount.toFixed(2)}&nbsp;
          {result.currency}
        </strong>
      </>
    )}
  </p>
);
