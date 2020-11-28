import React from "react";
import "./App.css";
import {
  useParams,
  withRouter,
  Switch,
  Route,
  BrowserRouter,
  Link
} from "react-router-dom";


import Info from "./LearnMore";


const PetsInfo = (props) => {
  let name = props.name;
  return (
    <section class="rectangle">
      <div className="info">
        <h1>{props.name}</h1>
        <p> {props.breed}</p>
        <p> {props.status}</p>
        <p> {props.gender}</p>
        <p> {props.yearsOld}</p>
        <p> {props.adopted} </p>
        <Link to={name}>
          <b>View More Details</b>
        </Link>
      </div>
    </section>
  );
};

export default PetsInfo;
