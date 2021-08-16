import "./About.css";
const About = () => {
  return (
    <div className="bcard">
      <header className="head">
        <h1>Lets manage your cash!</h1>
      </header>
      <section className="about">
        <h2 id="description">Description</h2>
        <p>
          This is a web app that calculates the changes you need to return to
          the customer on a particular bill amount and sum of money paid. Built
          using ReactJS.
        </p>
        <h2 id="live-link">Github Link</h2>
        <p>
          <a href="https://github.com/SJTGSHIVAM/cash_reg_mark_10">
            https://github.com/SJTGSHIVAM/cash_reg_mark_10
          </a>
        </p>
        <h2 id="salient-features-are">Salient features are</h2>
        <ul>
          <li>Built in ReactJS </li>
          <li>Have currencies of Rs. 1, 5, 10, 20, 100, 500, 2000</li>
          <li>
            Have an input field for the user aka cashier to enter a bill amount
          </li>
          <li>
            Have an input field for the user aka cashier to enter the cash given
            by the customer.
          </li>
          <li>
            The app tells the cashier/user the amount to be returned in change
            to the customer with the minimum number of notes
          </li>
          <li>Cash given input only opens up if bill amount is value</li>
        </ul>
      </section>
    </div>
  );
};
export default About;
