import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <p> BoG's Animal Shelter </p>
        </header>
      </div>
    </BrowserRouter>
  );
}

{
  /*render(<store />)*/
}
export default App;
