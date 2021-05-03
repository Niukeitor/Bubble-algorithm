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

function dibujarCarta(palo, numero) {
  //   limpiarClases();

  let carta = document.createElement("div");
  carta.classList.add("card");

  let contenido = document.createElement("span");
  contenido.classList.add("number", palo);
  contenido.innerHTML = numero;

  carta.appendChild(contenido);
  return carta;
}

var listaCartas = [];

function generadorDeCartas() {
  var inputValue = document.getElementById("input").value;
  let containerCartas = document.querySelector(".container-card");
  if (containerCartas != null) {
    document.querySelector(".padre").removeChild(containerCartas);
  }

  console.log("Container ", containerCartas);
  let newContainerCartas = document.createElement("div");
  newContainerCartas.classList.add("container-card");
  let padre = document.querySelector(".padre");
  padre.appendChild(newContainerCartas);

  for (var i = 0; i < inputValue; i++) {
    let palo = generateRandomPalo();
    let numero = generateRandomNumber();

    let cartaGenerada = dibujarCarta(palo, numero);
    console.log("Carta ", cartaGenerada);
    newContainerCartas.appendChild(cartaGenerada);
  }
}

window.onload = function() {
  var botonGenerador = document.getElementById("draw");

  botonGenerador.addEventListener("click", generadorDeCartas);
};
