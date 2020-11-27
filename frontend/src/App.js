import ReactDOM from 'react-dom';
import "./App.css";
import React from "react";
import { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";


function App() {
  return (
    <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>
          <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
    </BrowserRouter>
    
  );
}
export default App;