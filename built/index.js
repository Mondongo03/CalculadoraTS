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
let contador = 1;
