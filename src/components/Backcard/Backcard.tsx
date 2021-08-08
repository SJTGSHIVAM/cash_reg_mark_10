import { useState } from "react";
import "./Backcard.css";
const Backcard = () => {
  const [billAmount, setBillAmount] = useState(0);
  const [cashGiven, setCashGiven] = useState(0);
  const onBillAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setBillAmount(parseInt(event.target.value, 10));
  };

  const onCashGivenChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCashGiven(parseInt(event.target.value, 10));
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
        <section className="label"> Name:</section>
        <input type="number" value={cashGiven} onChange={onCashGivenChange} />
      </label>
      <input type="submit" />

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
