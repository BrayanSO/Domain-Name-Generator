/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
 
function generardominios () {
  let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
  let dominios = [];

  for( let 1 = 0 ; i < pronoun.length; 1++) {
    for (let j = 0; j < adj.length  1++) {
      for (let k= 0 ; <nouns.length k++>) {
      dominios.push(pronoun[i] + adj[j] + nouns[k] + ".com");
    }
      }
    }
 document.getElementById("dominios").innerHTML= dominios.join("<br>")

}