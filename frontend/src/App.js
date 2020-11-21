import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { render } from "react-dom";

//HTML DOES NOT PROPERLY LINK
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p> BoG's Animal Shelter </p> 
        <a href="http://localhost:3000/about.html">About</a>
      </header>
      {/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
    </div>
  );
}

{/*render(<store />)*/}
export default App;
