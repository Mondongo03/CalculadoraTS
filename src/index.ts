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
    let content  = (document.getElementById("campotexto") as HTMLInputElement).value;
    lista.append(nuevoElemento);
    let defaultTipo: HTMLInputElement = (document.getElementById("default")! as HTMLInputElement);
    let boldTipo: HTMLInputElement = (document.getElementById("bold")!  as HTMLInputElement);
    let italicTipo: HTMLInputElement = (document.getElementById("italic")!  as HTMLInputElement);

 
    if(boldTipo.checked)  nuevoElemento.innerHTML = "<b>"+content+"</b>";
    else if(italicTipo.checked)  nuevoElemento.innerHTML = "<i>"+content+"</i>";
    else nuevoElemento.innerHTML = content;
    
    content!= "" ;
    contador++;

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

let contador: number = 1;