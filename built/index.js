"use strict";
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
let numero1 = "";
let numero2 = "";
let suma = false;
let multiplicacion = false;
let resta = false;
let division = false;
let labelText = document.getElementById("texto");
/*function clickNumber(numero:number){
    if (typeof numero !== 'number') {
        console.error('El parámetro debe ser un número');
        return; // Salir de la función si no es un número
    }
    switch(numero){
        case 1: {
            if(!suma || !multiplicacion || !resta || !division) numero1 = numero1.concat("1");
            else numero2 = numero2.concat("1");
            labelText!.innerText = labelText!.innerText + "1";
                break;

        }
       
    }
}*/
let currentOperation = '';
let currentInput = '';
function clickNumber(num) {
    currentInput += num.toString();
    updateTexto(currentOperation + currentInput);
}
function updateTexto(value) {
    const display = document.getElementById('texto');
    if (display) {
        display.innerText = value;
    }
}
function clearTexto() {
    currentOperation = '';
    currentInput = '';
    updateTexto('0');
}
function reset() {
    currentOperation = '';
    currentInput = '';
}
function updateOperacion(op) {
    if (currentInput) {
        currentOperation += currentInput + ' ' + op + ' ';
        currentInput = '';
        updateTexto(currentOperation);
    }
}
function calcularResultado() {
    if (currentInput) {
        currentOperation += currentInput;
        try {
            const result = eval(currentOperation);
            updateTexto(result.toString());
            reset();
        }
        catch (error) {
            updateTexto('Error');
            reset();
        }
    }
}
