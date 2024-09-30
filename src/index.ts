
function addToList(){
    let lista: HTMLElement = document.getElementById("lista")!;
    let nuevoElemento = document.createElement("li");
    let content  = (document.getElementById("campotexto") as HTMLInputElement).value;
    lista.append(nuevoElemento);
    let defaultTipo: HTMLInputElement = (document.getElementById("default")! as HTMLInputElement);
    let boldTipo: HTMLInputElement = (document.getElementById("bold")!  as HTMLInputElement);
    let italicTipo: HTMLInputElement = (document.getElementById("italic")!  as HTMLInputElement);

 
    if(boldTipo.checked)  nuevoElemento.innerHTML = "<b>"+content+"</b>";
    else if(italicTipo.checked)  nuevoElemento.innerHTML = "<i>"+content+"</i>";
    else nuevoElemento.innerHTML = content;
    
    content!= "" ;
    

}

function deleteToList(): void {
    const lista = document.getElementById("lista") as HTMLUListElement;
    const index = (document.getElementById("campotexto") as HTMLInputElement).value;
    const items = lista.getElementsByTagName("li");
    const indexNum = parseInt(index, 10);

    if (!isNaN(indexNum) && indexNum > 0 && indexNum <= items.length) {
        lista.removeChild(items[indexNum - 1]);
    } else {
        alert("Por favor, ingresa un número válido dentro del rango de elementos.");
    }
}

let numero1: string = "";
let numero2: string = "";
let suma: boolean = false;
let multiplicacion: boolean = false
let resta: boolean = false;
let division: boolean = false;
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
let currentOperation: string = '';
let currentInput: string = '';

function clickNumber(num: number): void {
    currentInput += num.toString();
    updateTexto(currentOperation + currentInput);
}

function updateTexto(value: string): void {
    const display: HTMLElement | null = document.getElementById('texto');
    if (display) {
        display.innerText = value;
    }
}

function clearTexto(): void {
    currentOperation = '';
    currentInput = '';
    updateTexto('0');
}

function reset(): void {
    currentOperation = '';
    currentInput = '';
}

function updateOperacion(op: string): void {
    if (currentInput) {
        currentOperation += currentInput + ' ' + op + ' ';
        currentInput = '';
        updateTexto(currentOperation);
    }
}

function calcularResultado(): void {
    if (currentInput) {
        currentOperation += currentInput;
        try {
            const result = eval(currentOperation); 
            updateTexto(result.toString());
            reset();
        } catch (error) {
            updateTexto('Error');
            reset();
        }
    }
}