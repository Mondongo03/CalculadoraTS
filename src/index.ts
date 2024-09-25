let titulo: HTMLElement = document.getElementById("titulo")!;

function cambiarTitulo(){
    if(titulo!){
        titulo.innerHTML = "Títuloooooooooooooooooooo";
        titulo.style.color = "000f0f"
    }
}

function addToList(){
    let lista: HTMLElement = document.getElementById("lista")!;
    let nuevoElemento = document.createElement("li");
    lista.append(nuevoElemento);
    nuevoElemento.innerHTML = "Elemento "+ contador;
    contador++;

}
function deletetolist() {
    let lista = document.getElementById("lista")!;
    let index = document.getElementById("campotexto").value;
    let items = lista.getElementsByTagName("li"); 
    let indexNum = parseInt(index, 10);
    if (!isNaN(indexNum) && indexNum > 0 && indexNum <= items.length) {
        lista.removeChild(items[indexNum - 1]); 
    }
    else {
        alert("Por favor, ingresa un número válido dentro del rango de elementos.");
    }
}
let contador: number = 1;