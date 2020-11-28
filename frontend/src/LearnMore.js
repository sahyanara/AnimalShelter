import React from "react";
import "./App.css";
import { useParams, withRouter, Link } from "react-router-dom";

const Info = (props) => {
  let { id } = useParams();
  console.log(id);
  //console.log(props.petArr);
  let pet = {};
  props.petArr.forEach((species) => {
    species.pets.forEach((eachPet) => {
      if (eachPet.name === id) {
        pet = eachPet;
      }
    });
  });
  //console.log(name); // { name: 'cherries', quantity: 5 }
  return (
    <section>
      <img src={pet.image} alt="lol" />
      <h1>{pet.name}</h1>
      <h4>{pet.age}</h4>
      <h4>{pet.status}</h4>
      <h4>{pet.breed}</h4>
      <h4>{pet.description}</h4>
      <a href="#" class="adoptButton">
        ADOPT ME!
      </a>
      <Link to="/">Back</Link>
    </section>
  );
};

export default Info;
