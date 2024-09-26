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
    let content = document.getElementById("campotexto").value;
    lista.append(nuevoElemento);
    let defaultTipo = document.getElementById("default");
    let boldTipo = document.getElementById("bold");
    let italicTipo = document.getElementById("italic");
    if (boldTipo.checked)
        nuevoElemento.innerHTML = "<b>" + content + "</b>";
    else if (italicTipo.checked)
        nuevoElemento.innerHTML = "<i>" + content + "</i>";
    else
        nuevoElemento.innerHTML = content;
    content != "";
    contador++;
}
function deleteToList() {
    const lista = document.getElementById("lista");
    const index = document.getElementById("campotexto").value;
    const items = lista.getElementsByTagName("li");
    const indexNum = parseInt(index, 10);
    if (!isNaN(indexNum) && indexNum > 0 && indexNum <= items.length) {
        lista.removeChild(items[indexNum - 1]);
    }
    else {
        alert("Por favor, ingresa un número válido dentro del rango de elementos.");
    }
}
let contador = 1;
