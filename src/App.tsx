import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Backcard from "./components/Backcard";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {" "}
      {/* <Navbar /> */}
      <Backcard />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
