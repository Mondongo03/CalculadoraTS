

let numero1: string = "";
let numero2: string = "";
let suma: boolean = false;
let multiplicacion: boolean = false
let resta: boolean = false;
let division: boolean = false;
let labelText = document.getElementById("texto");

function clickNumber(numero:number){
    if (typeof numero !== 'number') {
        console.error('El parámetro debe ser un número');
        return; 
    }
    /*if(!suma || !multiplicacion || !resta || !division) numero1 = numero1.concat(numero.toString());
    else numero2 = numero2.concat(numero.toString());*/
    
    labelText!.innerText = labelText!.innerText + numero; 
    
}
function updateOperacion(operador:String) {
    switch(operador){
        case"+": {
            labelText!.innerText = labelText!.innerText + "+";
            break;
        }
        case"-": {
            labelText!.innerText = labelText!.innerText + "-";
            break;
        }
        case"*": {
            labelText!.innerText = labelText!.innerText + "*";
            break;
        }
        case"/": {
            labelText!.innerText = labelText!.innerText + "/";
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
function calcularResultado(){
    labelText!.innerText = eval(labelText!.textContent!);
}
function limpiarResultado(){
    labelText!.textContent = "";
}