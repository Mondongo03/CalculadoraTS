let numero1: string = "";
let numero2: string = "";
let suma: boolean = false;
let multiplicacion: boolean = false
let resta: boolean = false;
let division: boolean = false;
let labelText = document.getElementById("texto");

function insertarCaracter(numero:string){
    labelText!.innerText = labelText!.innerText + numero;   
}

function calcularResultado(){
    labelText!.innerText = eval(labelText!.textContent!);
}

function limpiarResultado(){
    labelText!.textContent = "";
}
function borrarUnCaracter(){
    labelText!.textContent = labelText!.textContent!.substring(0, labelText!.textContent!.length - 1);
}