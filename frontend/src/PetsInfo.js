import React from "react"
import "./App.css";
import {useParams, withRouter, Link} from 'react-router-dom'

const PetsInfo = (props) => {
    return (
      <section class = "rectangle">
      <div className = "info">
        <h1>{props.name}</h1>
        <p> {props.breed}</p>
        <p> {props.status}</p>
        <p> {props.gender}</p>
        <p> {props.yearsOld}</p>
        <p> {props.adopted} </p>
        <a href="#" class="adoptButton"> ADOPT ME! </a>
      </div>
      </section>
    )
  }

  export default PetsInfo;