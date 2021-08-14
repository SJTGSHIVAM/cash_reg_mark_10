import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Backcard from "./components/Backcard";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="page"> */}
      <Navbar />
      <Switch>
        <Route path="/" component={Backcard} exact />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
