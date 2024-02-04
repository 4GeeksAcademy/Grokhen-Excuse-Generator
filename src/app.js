/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let who = [
    "El perro",
    "Mi gato",
    "Un extraterrestre",
    "Una gallina",
    "Internet Explorer"
  ];
  let action = [
    "se ha comido",
    "ha roto",
    "me ha robado",
    "ha hecho desaparecer",
    "ha cortado"
  ];
  let what = ["mis deberes", "mi código", "el libro", "el coche", "mi dinero"];
  let when = [
    "justo antes de clase",
    "cuando estaba de camino",
    "al terminar el partido",
    "durante la comida",
    "mientras me duchaba"
  ];

  let creativeExcuse =
    who[Math.floor(Math.random() * 5)] +
    " " +
    action[Math.floor(Math.random() * 5)] +
    " " +
    what[Math.floor(Math.random() * 5)] +
    " " +
    when[Math.floor(Math.random() * 5)];
  return creativeExcuse;
};
