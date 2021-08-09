const CashGivenAlert = ({ valCashGiven }: { valCashGiven: boolean }) => {
  return (
    <>{!valCashGiven && <span>Please enter Numeric Given Cash Amount</span>}</>
  );
};
export default CashGivenAlert;
