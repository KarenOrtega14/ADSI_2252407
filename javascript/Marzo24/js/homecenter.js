const lupa = document.getElementById("idlupa");
lupa.addEventListener("click", limpiar);
function limpiar() {
    document.getElementById("encabezado").innerHTML = "";
    mostrarInput();
}

function mostrarInput() {
    let contendorEncabezado = document.getElementById("encabezado");
    let inputBuscar = document.createElement("input");
    let labelIcon = document.createElement("label");
    let iIcon = document.createElement("i");
    let textI = document.createTextNode("X")

    contendorEncabezado.appendChild(inputBuscar);
    contendorEncabezado.appendChild(labelIcon);
    labelIcon.appendChild(iIcon);
    iIcon.appendChild(textI);

    contendorEncabezado.setAttribute("class","encabezadoBuscar")
    inputBuscar.setAttribute("class", "inputBuscar");
    labelIcon.setAttribute("class", "icon iconCancel");
    
}