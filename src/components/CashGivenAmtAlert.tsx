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
          Make sure Cash amount is greater or equal to Bill Amount and click on
          Check Button
        </span>
      )}
    </>
  );
};
export default CashGivenAmtAlert;
