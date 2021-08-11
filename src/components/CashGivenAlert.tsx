const CashGivenAlert = ({ valCashGiven }: { valCashGiven: boolean }) => {
  return (
    <>
      {!valCashGiven && (
        <span>Please enter positive numeric Given Cash Amount</span>
      )}
    </>
  );
};
export default CashGivenAlert;
