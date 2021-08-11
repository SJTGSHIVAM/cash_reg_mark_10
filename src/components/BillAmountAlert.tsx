const BillAmountAlert = ({ valBillAmount }: { valBillAmount: boolean }) => {
  return (
    <>
      {!valBillAmount && (
        <span>Please enter positive numeric Bill Amount greater than 0 </span>
      )}
    </>
  );
};
export default BillAmountAlert;
