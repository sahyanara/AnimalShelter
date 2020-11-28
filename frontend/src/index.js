import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import PetsInfo from "./PetsInfo";
import Category from "./Category";
import { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Info from "./LearnMore";

const posts = [
  {
    _id: "dog",
    pets: [
      {
        image:
          "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
        name: "Rocky",
        breed: "American pit bull cross",
        status: "Neutered and vaccinated",
        gender: "Female",
        yearsOld: 7,
        adopted: false
      },
      {
        image:
          "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
        name: "Juju",
        breed: "American staff cross",
        status: "Vaccindated, not neutered",
        gender: "Male",
        yearsOld: 7,
        adopted: true
      }
    ]
  },
  {
    _id: "cat",
    pets: [
      {
        image: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
        name: "Terry",
        breed: "Domestic medium hair cross",
        status: "Neutered, not vaccinated",
        gender: "Male",
        yearsOld: 2,
        adopted: false
      },
      {
        image: "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg",
        name: "Chonker",
        breed: "Main coone",
        status: "Status unknown",
        gender: "Female",
        yearsOld: 5,
        adopted: true
      }
    ]
  }
];

const Store = () => {
  const allPets = posts.map((info, idx) => (
    <Category
      key={idx}
      _id={info._id}
      pets={info.pets.map((info1, idx1) => (
        <PetsInfo
          key={idx1}
          image={info1.image}
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
          <header className="App-header">
            <p> BoG's Animal Shelter </p>
            <Link class="buttons" to="/">Adopt</Link>
            <Link class="buttons" to="/about">About</Link>
          </header>       
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
            {allPets}
          </Route>
          <Route exact path="/:id" children={<Info petArr={posts} />}></Route>
        </Switch>
      </BrowserRouter>
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
