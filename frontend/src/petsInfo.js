import React from "react"

const petsInfo = (props) => {
    return (
      <div className = "info">
        <h1>{props.name}</h1>
        <p> {props.breed}</p>
        <p> {props.status}</p>
        <p> {props.gender}</p>
        <p> {props.yearsOld}</p>
        <p> {props.adopted} </p>
      </div>
    )
  }

  export default petsInfo;