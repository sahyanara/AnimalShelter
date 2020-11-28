import React from "react"
import "./App.css";
import {useParams, withRouter, Link} from 'react-router-dom'

const Category = (props) => {
    return (
      <section class = "category">
      <div className = "info">
        <h1>{props._id}</h1>
        <p>{props.pets}</p>
      </div>
      </section>
    )
  }

  export default Category;
