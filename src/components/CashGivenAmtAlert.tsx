const CashGivenAmtAlert = ({
  valCashGiven,
  valCashGivenAmt,
}: {
  valCashGiven: boolean;
  valCashGivenAmt: boolean;
}) => {
  return (
    <>
      {" "}
      {valCashGiven && !valCashGivenAmt && (
        <span>
          Make sure Cash amount is greater or equal to Bill Amount then click on
          Check Button
        </span>
      )}
    </>
  );
};
export default CashGivenAmtAlert;
