import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import petsInfo from "./petsInfo";

//NOT SURE HOW TO RENDER THE STORE
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
