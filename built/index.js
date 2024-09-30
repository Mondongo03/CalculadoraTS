"use strict";
let numero1 = "";
let numero2 = "";
let suma = false;
let multiplicacion = false;
let resta = false;
let division = false;
let labelText = document.getElementById("texto");
function clickNumber(numero) {
    if (typeof numero !== 'number') {
        console.error('El parámetro debe ser un número');
        return;
    }
    /*if(!suma || !multiplicacion || !resta || !division) numero1 = numero1.concat(numero.toString());
    else numero2 = numero2.concat(numero.toString());*/
    labelText.innerText = labelText.innerText + numero;
}
function updateOperacion(operador) {
    switch (operador) {
        case "+": {
            labelText.innerText = labelText.innerText + "+";
            break;
        }
        case "-": {
            labelText.innerText = labelText.innerText + "-";
            break;
        }
        case "*": {
            labelText.innerText = labelText.innerText + "*";
            break;
        }
        case "/": {
            labelText.innerText = labelText.innerText + "/";
            break;
        }
    }
}
/*
suma = true;
            resta = false;
            multiplicacion = false;
            division = false;
*/
function calcularResultado() {
    labelText.innerText = eval(labelText.textContent);
}
function limpiarResultado() {
    labelText.textContent = "";
}
