import { useState } from "react";
import { couldStartTrivia } from "typescript";
import BillAmountAlert from "../BillAmountAlert";
import CashGivenAlert from "../CashGivenAlert";
import CashGivenAmtAlert from "../CashGivenAmtAlert";
import ReturnNotes from "../ReturnNotes";
import "./Backcard.css";
const Backcard = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [valBillAmount, setValBillAmount] = useState(true);
  const [cashGiven, setCashGiven] = useState(0);
  const [valCashGiven, setValCashGiven] = useState(true);
  const [valCashGivenAmt, setValCashGivenAmt] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [noteArray, setNoteArray] = useState<{ amt: number; total: number }[]>(
    []
  );
  // const validateBillAmount = (e:string):boolean => {};
  // const validateCashGiven = (e:string):boolean => {};
  const differentNotes: number[] = [2000, 500, 100, 20, 10, 5, 1];
  const validateCashGivenAmt = (cashInt: number): boolean => {
    if (billAmount > cashInt) return false;
    return true;
  };

  const onBillAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setIsClicked(false);
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
    setIsClicked(false);
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
  const genrateNotesCount = (bill: number, cash: number) => {
    if (bill - cash === 0) return [];
    const total: number = cash - bill;
    let remcost: number = total;
    let noOfNotes: { amt: number; total: number }[] = [];
    for (let notestr in differentNotes) {
      let note = differentNotes[notestr];
      if (remcost >= note) {
        let countOfNotes = Math.floor(remcost / note);
        remcost = remcost - countOfNotes * note;
        // console.log({ amt: note, total: countOfNotes });

        noOfNotes.push({ amt: note, total: countOfNotes });
      }
      //       noOfNotes[index].innerText = `${notes}`
    }
    console.log(noOfNotes);
    return noOfNotes;
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
      {valBillAmount && (
        <>
          <label>
            <section className="label"> Cash Given:</section>
            <input
              type="number"
              value={cashGiven}
              onChange={onCashGivenChange}
            />
          </label>

          <CashGivenAlert valCashGiven={valCashGiven} />
          <CashGivenAmtAlert
            valCashGiven={valCashGiven}
            valCashGivenAmt={valCashGivenAmt}
          />
        </>
      )}
      <button
        onClick={() => {
          setValCashGivenAmt(validateCashGivenAmt(cashGiven));

          if (validateCashGivenAmt(cashGiven)) {
            setIsClicked(true);
            setNoteArray(genrateNotesCount(billAmount, cashGiven));
          }
        }}
      >
        CHECK
      </button>

      {isClicked && <ReturnNotes notes={noteArray} />}
    </div>
  );
};
export default Backcard;
