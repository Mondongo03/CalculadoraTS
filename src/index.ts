let numero1: string = "";
let numero2: string = "";
let suma: boolean = false;
let multiplicacion: boolean = false
let resta: boolean = false;
let division: boolean = false;
let labelText = document.getElementById("texto");

function insertarCaracter(numero:string){
    const labelTextContent = labelText!.textContent!;
    if(labelTextContent === "ERROR") {
        labelText!.innerText = "";
        labelText!.innerText = labelText!.innerText + numero;
    }
    else  labelText!.innerText = labelText!.innerText + numero;
}

function calcularResultado(){

    const labelTextContent = labelText!.textContent!;
    
    if (labelTextContent === "") labelText!.innerText = "ERROR";

    else {
        try{
            labelText!.innerText = eval(labelText!.textContent!);
        } catch(ERROR){
            labelText!.innerText = "SINTAX ERROR";
        }
    }
}

function limpiarResultado(){
    labelText!.textContent = "";
}
function borrarUnCaracter(){
    labelText!.textContent = labelText!.textContent!.substring(0, labelText!.textContent!.length - 1);
}
