"use strict";
let numero1 = "";
let numero2 = "";
let suma = false;
let multiplicacion = false;
let resta = false;
let division = false;
let labelText = document.getElementById("texto");
function insertarCaracter(numero) {
    labelText.innerText = labelText.innerText + numero;
}
function calcularResultado() {
    labelText.innerText = eval(labelText.textContent);
}
function limpiarResultado() {
    labelText.textContent = "";
}
function borrarUnCaracter() {
    labelText.textContent = labelText.textContent.substring(0, labelText.textContent.length - 1);
}
