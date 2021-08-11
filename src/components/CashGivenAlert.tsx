const CashGivenAlert = ({ valCashGiven }: { valCashGiven: boolean }) => {
  return (
    <>
      {!valCashGiven && (
        <span>
          Please enter positive numeric Given Cash Amount greater than 0
        </span>
      )}
    </>
  );
};
export default CashGivenAlert;
