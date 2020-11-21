import logo from './logo.svg';
import './App.css';
import petsInfo from "./petsInfo";
import React, { Component } from "react";
import { render } from "react-dom";

const posts = [
  {
      name: 'Rocky',
      breed: 'American pit bull cross',
      status: 'Neutered and vaccinated',
      gender: 'Female',
      yearsOld: 7,
      adopted: false,
  },
  {
      name: 'Juju',
      breed: 'American staff cross',
      status: 'Vaccindated, not neutered',
      gender: 'Male',
      yearsOld: 7,
      adopted: true,
  }
];

const store = () => {
  const allPets = posts.map((pet, idx) => (
    <petsInfo
      key={idx}
      name={pet.name}
      breed={pet.breed}
      status={pet.status}
      gender={pet.gender}
      yearsOld={pet.yearsOld}
      adopted={pet.adopted}
    />
  ));
  return (
    {allPets}
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p> BoG's Animal Shelter </p> 
        <a href="about.html">About</a>
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
