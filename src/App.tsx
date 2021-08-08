import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Backcard from "./components/Backcard";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* <Navbar /> */}
      <Backcard />
    </BrowserRouter>
  );
}

export default App;
