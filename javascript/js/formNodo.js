function crearTabla() {
    if(validarFormulario() == false) return false; 
    let tabla = document.getElementById('main-table');
    if(!tabla) createTable();
    agregarFila();
    limpiarForm();
}
function createTable(){
    let contenedor = document.getElementById("main-content")
    let nodeToAddTable = document.createElement("table");

    let nodeToAddTr = document.createElement("tr");

    let nodeToAddTh1 = document.createElement("th");
    let nodeToAddTh2 = document.createElement("th");
    let nodeToAddTh3 = document.createElement("th");
    let nodeToAddTh4 = document.createElement("th");

    let nodeToAddtext1 = document.createTextNode("Código");
    let nodeToAddtext2 = document.createTextNode("Descripción");
    let nodeToAddtext3 = document.createTextNode("Valor Unitario");
    let nodeToAddtext4 = document.createTextNode("Unidades en Stock");

    contenedor.appendChild(nodeToAddTable);
    nodeToAddTable.appendChild(nodeToAddTr);
    nodeToAddTable.setAttribute("class","table-style");
    nodeToAddTable.setAttribute("id","main-table")

    nodeToAddTr.appendChild(nodeToAddTh1);
    nodeToAddTr.appendChild(nodeToAddTh2);
    nodeToAddTr.appendChild(nodeToAddTh3);
    nodeToAddTr.appendChild(nodeToAddTh4);

    nodeToAddTh1.appendChild(nodeToAddtext1);
    nodeToAddTh1.setAttribute("class","th1")
    nodeToAddTh2.appendChild(nodeToAddtext2);
    nodeToAddTh2.setAttribute("class","th2")
    nodeToAddTh3.appendChild(nodeToAddtext3);
    nodeToAddTh3.setAttribute("class","th3")
    nodeToAddTh4.appendChild(nodeToAddtext4);
    nodeToAddTh4.setAttribute("class","th4")
};

let codigo= document.getElementById("codigo");
let descripcion= document.getElementById("descripcion");
let valorUnitario= document.getElementById("valor");
let Stock= document.getElementById("stock");


function validarFormulario() {

 if (codigo.value =="") {
     alert("Por favor, ingrese el código");
     document.getElementById("codigo").focus();
     return false;
 }
 if (descripcion.value =="") {
    alert("Por favor, ingrese la descripción");
    document.getElementById("descripcion").focus();
    return false;
}
if (valorUnitario.value =="") {
    alert("Por favor, ingrese el valor unitario");
    document.getElementById("valor").focus();
    return false;
}
if (Stock.value =="") {
    alert("Por favor, ingrese el stock");
    document.getElementById("Stock").focus();
    return false;
}
return true;
};
function agregarFila(){
    
    let tabla = document.getElementById('main-table');
    let fila = document.createElement('tr');
    let celda1 = document.createElement('td');
    let celda2 = document.createElement('td');
    let celda3 = document.createElement('td');
    let celda4 = document.createElement('td');

    let info1 = document.createTextNode(codigo.value);
    let info2 = document.createTextNode(descripcion.value);
    let info3 = document.createTextNode(valorUnitario.value);
    let info4 = document.createTextNode(Stock.value);

    celda1.appendChild(info1);
    celda2.appendChild(info2);
    celda3.appendChild(info3);
    celda4.appendChild(info4);

    fila.appendChild(celda1);
    fila.appendChild(celda2);
    fila.appendChild(celda3);
    fila.appendChild(celda4);
    tabla.appendChild(fila)
}
function limpiarForm() {
    document.getElementById("frm").reset();
}
