/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";
//import "./assets/img/4geeks.ico";

// window.onload = function generateNames() {
  //write your code here
  let pronoun = ["el", "nuestro", "mi", "su", "tu"];
  let adj = ["buen", "gran", "pequeño", "hermoso"];
  let noun = ["corredor", "mapache", "ciudadano", "perro", "gato"];

  let containerNames = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let q = 0; q < adj.length; q++) {
      for (let k = 0; k < noun.length; k++) {
        let result = pronoun[i] + adj[q] + noun[k] + ".com";
        console.log(result);
      }
    }
  }
// };
// generateNames();
