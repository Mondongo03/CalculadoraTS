"use strict";
let titulo = document.getElementById("titulo");
function cambiarTitulo() {
    if (titulo) {
        titulo.innerHTML = "Títuloooooooooooooooooooo";
        titulo.style.color = "000f0f";
    }
}
function addToList() {
    let lista = document.getElementById("lista");
    let nuevoElemento = document.createElement("li");
    lista.append(nuevoElemento);
    nuevoElemento.innerHTML = "Elemento " + contador;
    contador++;
}
function deletetolist() {
    var _a;
    let lista = document.getElementById("lista");
    let index = (_a = document.getElementById("campotexto")) === null || _a === void 0 ? void 0 : _a.nodeValue;
    let items = lista.getElementsByTagName("li");
    let indexNum = parseInt(index, 10);
    if (!isNaN(indexNum) && indexNum > 0 && indexNum <= items.length) {
        lista.removeChild(items[indexNum - 1]);
    }
    else {
        alert("Por favor, ingresa un número válido dentro del rango de elementos.");
    }
}
let contador = 1;
