import { useState } from "react";
import { couldStartTrivia } from "typescript";
import BillAmountAlert from "../BillAmountAlert";
import CashGivenAlert from "../CashGivenAlert";
import CashGivenAmtAlert from "../CashGivenAmtAlert";
import ReturnNotes from "../ReturnNotes";
import "./Backcard.css";
const Backcard = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [valBillAmount, setValBillAmount] = useState(false);
  const [cashGiven, setCashGiven] = useState(0);
  const [valCashGiven, setValCashGiven] = useState(false);
  const [valCashGivenAmt, setValCashGivenAmt] = useState(false);

  // const validateBillAmount = (e:string):boolean => {};
  // const validateCashGiven = (e:string):boolean => {};
  const differentNotes = [2000, 500, 100, 20, 10, 5, 1];
  const validateCashGivenAmt = (cashInt: number): boolean => {
    if (billAmount > cashInt) return false;
    return true;
  };

  const onBillAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const billAmt = parseFloat(event.target.value);
    setValCashGivenAmt(false);
    if (isNaN(billAmt)) {
      setValBillAmount(false);
      setBillAmount(billAmt);
      return;
    }
    setValBillAmount(true);
    setBillAmount(billAmt);
  };

  const onCashGivenChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const cashAmt = parseFloat(event.target.value);
    setValCashGivenAmt(false);
    if (isNaN(cashAmt)) {
      setValCashGiven(false);
      setCashGiven(cashAmt);
      return;
    }

    setValCashGiven(true);
    setCashGiven(cashAmt);
  };

  // const genrateNotesCount=(bill,cash)=>{
  //   if((bill-cash)==0)
  //   return [];
  //   const total=bill-cash;
  //   let remcost=total;
  //   for note in differentNotes{
  //              if(remcost >= note){
  //       let countOfNotes = Math.floor(remcost/note);
  //       remcost = remcost - countOfNotes*note;
  //       noOfNotes[index].innerText = `${notes}`;
  //   }
  //   return remcost
  //   }

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

      <BillAmountAlert valBillAmount={valBillAmount} />
      <label>
        <section className="label"> Cash Given:</section>
        <input type="number" value={cashGiven} onChange={onCashGivenChange} />
      </label>

      <CashGivenAlert valCashGiven={valCashGiven} />
      <CashGivenAmtAlert
        valCashGiven={valCashGiven}
        valCashGivenAmt={valCashGivenAmt}
      />
      <button
        onClick={() => {
          setValCashGivenAmt(validateCashGivenAmt(cashGiven));
        }}
      >
        CHECK
      </button>
      <ReturnNotes
        notes={[
          { amt: 2000, total: 1 },
          { amt: 1000, total: 1 },
          { amt: 500, total: 1 },
        ]}
      />
    </div>
  );
};
export default Backcard;
