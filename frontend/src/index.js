import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PetsInfo from "./PetsInfo";
import Category from "./Category";
import { Component } from "react";
import { render } from "react-dom";
import Button from "@material-ui/core/Button";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

/*const posts = [
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
];*/

const posts = [
	{
		_id: 'dog',
		pets: [
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
		]
	},
	{
		_id: 'cat',
		pets: [
			{
				name: 'Terry',
				breed: 'Domestic medium hair cross',
				status: 'Neutered, not vaccinated',
				gender: 'Male',
				yearsOld: 2,
				adopted: false,
			},
			{
				name: 'Chonker',
				breed: 'Main coone',
				status: 'Status unknown',
				gender: 'Female',
				yearsOld: 5,
				adopted: true,
			}
    ]
  }
]

const Store = () => {
  const allPets = posts.map((info, idx) => (
    /*<PetsInfo
      key={idx}
      _id={info._id}
      name={info.name}
      breed={info.breed}
      status={info.status}
      gender={info.gender}
      yearsOld={info.yearsOld}
      adopted={info.adopted}
    />
  ));*/
    <Category
      key={idx}
      _id={info._id}
      pets={info.pets.map((info1, idx1) => (
        <PetsInfo
          key={idx1}
          name={info1.name}
          breed={info1.breed}
          status={info1.status}
          gender={info1.gender}
          yearsOld={info1.yearsOld}
          adopted={info1.adopted}
        />
      ))}
    />
  ));
  return (
    <main>
      <BrowserRouter>
        <nav class = "buttons">
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
        {allPets}
    </main>
  );
};

render(<Store />, document.getElementById("root"));


/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

