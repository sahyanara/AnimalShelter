import React from "react";
import "./App.css";
import { useParams, withRouter, Link } from "react-router-dom";

const Info = (props) => {
  let { id } = useParams();
  console.log(id);
  //console.log(props.petArr);
  let pet = {};
  const [adopted, adoptToggle] = React.useState(false);

  props.petArr.forEach((species) => {
    species.pets.forEach((eachPet) => {
      if (eachPet.name === id) {
        pet = eachPet;
      }
    });
  });
  var isAdopted = "";
  function replaceButtonText(buttonId, text)
{
  if (document.getElementById)
  {
    var button=document.getElementById(buttonId);
    if (button)
    {
      if (button.childNodes[0])
      {
        button.childNodes[0].nodeValue=text;
      }
      else if (button.value)
      {
        button.value=text;
      }
      else //if (button.innerHTML)
      {
        button.innerHTML=text;
      }
    }
  }
}
  function handleClick(e) {
     e.preventDefault();
     replaceButtonText('myButton1', 'new button text');
    console.log("The link was clicked.");
    if (adopted === false) {
      adoptToggle(true);
      isAdopted = "Awaiting";
      pet.adopted = true;
    } else {
      adoptToggle(false);
      pet.adopted = false;
    }
  }
  // const handleClick = e => {
  //   if(adopted === false) {
  // adoptToggle(true);
  // isAdopted = "Awaiting";
  // pet.adopted = true;
  //   } else {
  //     adoptToggle(false);
  // pet.adopted = false;
  // isAdopted = "Adopt me!";
  //   }
  // }

  //console.log(name); // { name: 'cherries', quantity: 5 }
  return (
    <section>
      <img src={pet.image} alt="lol" />
      <h1>{pet.name}</h1>
      <h4>{pet.age}</h4>
      <h4>{pet.status}</h4>
      <h4>{pet.breed}</h4>
      <h4>{pet.description}</h4>
      <Link to="/">Back</Link>
      <button onClick={() => alert('Processing your adoption request!')}>
      Adopt me!!
    </button>

    </section>
  );
};

export default Info;
