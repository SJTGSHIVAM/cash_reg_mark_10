const BillAmountAlert = ({ valBillAmount }: { valBillAmount: boolean }) => {
  return <>{!valBillAmount && <span>Please enter Numeric Bill Amount</span>}</>;
};
export default BillAmountAlert;
