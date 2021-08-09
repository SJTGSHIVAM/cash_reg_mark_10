import { useState } from "react";
import { couldStartTrivia } from "typescript";
import "./Backcard.css";
const Backcard = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [valBillAmount, setValBillAmount] = useState(true);
  const [cashGiven, setCashGiven] = useState(0);
  const [valCashGiven, setValCashGiven] = useState(true);
  const [valCashGivenAmt, setValCashGivenAmt] = useState(true);

  // const validateBillAmount = (e:string):boolean => {};
  // const validateCashGiven = (e:string):boolean => {};
  const validateCashGivenAmt = (e: string): boolean => {
    const cashInt = parseFloat(e);
    if (billAmount > cashInt) return false;
    return true;
  };

  const onBillAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const billAmt = parseFloat(event.target.value);
    if (isNaN(billAmt)) {
      setValBillAmount(false);
      return;
    }
    setValBillAmount(true);
    setBillAmount(billAmt);
  };

  const onCashGivenChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCashGiven(parseFloat(event.target.value));
  };

  return (
    <div className="bcard">
      <header className="head">Lets manage your cash!</header>
      <section className="instruction">
        Enter the bill amount and cash given by the customer and know minimum
        number of notes to return.
      </section>
      <label>
        <section className="label"> Bill Amount:</section>
        <input type="number" value={billAmount} onChange={onBillAmountChange} />
      </label>
      <label>
        {!valBillAmount && <span>Please enter Numeric Bill Amount</span>}
        <section className="label"> Cash Given:</section>
        <input type="number" value={cashGiven} onChange={onCashGivenChange} />
      </label>
      {!valCashGiven && <span>Please enter Numeric Given Cash Amount</span>}
      {valCashGiven && !valCashGivenAmt && (
        <span>Cash amount should be greater or equal to Bill Amount</span>
      )}

      <section className="label">Return Change:</section>
      <div>
        <div className="table-col">
          <span className="smallcard">Note: </span>
          <span className="smallcard">No. of Notes</span>
        </div>
        {[
          { amt: 2000, total: 1 },
          { amt: 1000, total: 1 },
          { amt: 500, total: 1 },
        ].map((note) => (
          <div className="table-col">
            <span className="smallcard">{note.amt}: </span>
            <span className="smallcard">{note.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Backcard;
