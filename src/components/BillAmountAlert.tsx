const BillAmountAlert = ({ valBillAmount }: { valBillAmount: boolean }) => {
  return (
    <>
      {!valBillAmount && (
        <span>Please enter positive numeric Bill Amount </span>
      )}
    </>
  );
};
export default BillAmountAlert;
