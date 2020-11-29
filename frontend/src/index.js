import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './App';
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

var petData = [];
const posts = [];
//   // {
//   //   _id: "dog",
//   //   pets: [
//   //     {
//   //       image:
//   //         "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
//   //       name: "Rocky",
//   //       breed: "American pit bull cross",
//   //       status: "Neutered and vaccinated",
//   //       gender: "Female",
//   //       yearsOld: 7,
//   //       adopted: false
//   //     },
//   //     {
//   //       image:
//   //         "https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp",
//   //       name: "Juju",
//   //       breed: "American staff cross",
//   //       status: "Vaccindated, not neutered",
//   //       gender: "Male",
//   //       yearsOld: 7,
//   //       adopted: true
//   //     }
//   //   ]
//   // },
//   // {
//   //   _id: "cat",
//   //   pets: [
//   //     {
//   //       image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
//   //       name: "Terry",
//   //       breed: "Domestic medium hair cross",
//   //       status: "Neutered, not vaccinated",
//   //       gender: "Male",
//   //       yearsOld: 2,
//   //       adopted: false
//   //     },
//   //     {
//   //       image: "https://ichef.bbci.co.uk/news/800/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
//   //       name: "Chonker",
//   //       breed: "Main coone",
//   //       status: "Status unknown",
//   //       gender: "Female",
//   //       yearsOld: 5,
//   //       adopted: true
//   //     }
//   //   ]
//   // }
// ];

function App() {
  React.useEffect(() => {
    fetch('http://localhost:3001/')
      .then(response => response.json())
      .then(data => posts = data)
      .catch(error => {
        console.error(error)
      })
  }, [])
}


// React.useEffect(() => {
//       fetch('http://localhost:3000/')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => {
//           console.error(error)
//         })
//     }, [])
console.log(posts);

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
        <nav class="buttons">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
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





// function App() {
    
//   const [currentPets, setCurrentPets] = React.useState(PetsInfo)

//   React.useEffect(() => {
//     fetch('http://localhost:3001/pets')
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(error => {
//         console.error(error)
//       })
//   }, [])

//   const updateAdoption = (props) => {
//     currentPets[props.typeIndex].pets[props.petIndex].adopted = true
//     setCurrentPets(currentPets)
//   }
//   return (

//           <main>
//             <BrowserRouter>
//               <nav class="buttons">
//                 <Link to="/">Adopt</Link>
//                 <Link to="/about">About</Link>
//               </nav>
//               <Switch>
//                 <Route path="/About">
//                   <About />
//                 </Route>
//                 <Route exact path="/">
//                   <Home />
//                   {currentPets}
//                 </Route>
//                 <Route path="/:id" children={<Child currentPets={currentPets} updateAdoption={updateAdoption} />} />
//               </Switch>
//             </BrowserRouter>
//           </main>
//         );
//     // <Router>
//     //   <div className="main">
//     //     <Nav />
//     //     <div className="topMargin">
//     //       <Switch>
//     //         <Route exact path="/">
//     //           <Redirect to="/adoptapet" />
//     //         </Route>
//     //         <Route exact path="/about">
//     //           <About />
//     //         </Route>
//     //         <Route exact path="/adoptapet">
//     //           <AdoptAPet content={currentPets} />
//     //         </Route>
//     //         <Route path="/:id" children={<Child currentPets={currentPets} updateAdoption={updateAdoption} />} />
//     //       </Switch>
//     //     </div>
//     //   </div>
//     // </Router>
// }

// function Child(props) {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();
//   console.log(id);
//   let ids = id.split("-");
//   console.log(ids[0]);
//   console.log(ids[1]);
//   let type = 0;
//   let pet = 0;
//   while (props.currentPets[type]._id !== ids[1]) {
//     type++;
//   }
//   while (props.currentPets[type].pets[pet].name !== ids[0]) {
//     pet++;
//   }


//   return (
//     <PetsInfo
//       typeIndex={type}
//       petIndex={pet}
//       type={props.currentPets[type]._id}
//       name={props.currentPets[type].pets[pet].name}
//       breed={props.currentPets[type].pets[pet].breed}
//       status={props.currentPets[type].pets[pet].status}
//       gender={props.currentPets[type].pets[pet].gender}
//       yearsOld={props.currentPets[type].pets[pet].yearsOld}
//       adopted={props.currentPets[type].pets[pet].adopted}
//       updateAdoption={props.updateAdoption}
//       petInfo={props.currentPets}
//     />
//   );
// }




// /*
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
  
//   document.getElementById('root')
// );
// */

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// //reportWebVitals();
