/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

var number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function generateRandomNumber() {
  let indexNumber = Math.floor(Math.random() * number.length);
  return number[indexNumber];
}

function generateRandomPalo() {
  let palo = ["heart", "diamond", "club", "spade"];
  let indexPalo = Math.floor(Math.random() * palo.length);

  return palo[indexPalo];
}

function limpiarClases() {
  document.querySelector(".number").classList.remove("heart");
  document.querySelector(".number").classList.remove("diamond");
  document.querySelector(".number").classList.remove("club");
  document.querySelector(".number").classList.remove("spade");
}

function card() {
  limpiarClases();

  document.querySelector(".number").classList.add(generateRandomPalo());
  document.querySelector(".number").innerHTML = generateRandomNumber();
}

var inputValue = document.getElementById("input").value;
var listaCartas = [];

function generadorDeCartas() {
  for (var i = 0; i < inputValue; i++) {
    card();
    listaCartas.push(listaCartas[number]);
  }
}

window.onload = function() {
  //write your code here

  card();
  let btn = document.getElementById("draw");

  btn.addEventListener("click", card);

  generadorDeCartas();

  var botonGenerador = document.getElementById("draw");

  botonGenerador.addEventListener("click", generadorDeCartas);
};
