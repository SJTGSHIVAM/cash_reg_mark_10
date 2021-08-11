import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Backcard from "./components/Backcard";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Navbar />
      <Switch>
        <Route path="/" component={Backcard} exact />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
