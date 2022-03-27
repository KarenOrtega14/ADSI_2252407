const lupa = document.getElementById("idlupa");
lupa.addEventListener("click", limpiar);
function limpiar() {
    document.getElementById("encabezado").innerHTML = "";
    mostrarInput();
}

function mostrarInput() {
   
    let contenedorEncabezado = document.getElementById("encabezado");
    let labelLupa = document.createElement("label");
    let iLupa = document.createElement("i");
    let inputBuscar = document.createElement("input");
    let labelIcon = document.createElement("label");
    let iIcon = document.createElement("i");
    let textI = document.createTextNode("X");

    contenedorEncabezado.appendChild(labelLupa);
    labelLupa.appendChild(iLupa);
    contenedorEncabezado.appendChild(inputBuscar);
    contenedorEncabezado.appendChild(labelIcon);
    labelIcon.appendChild(iIcon);
    iIcon.appendChild(textI);

    contenedorEncabezado.setAttribute("class","encabezadoBuscar")
    inputBuscar.setAttribute("class", "inputBuscar");
    labelIcon.setAttribute("class", "icon iconCancel");
    labelIcon.setAttribute("id","iconCancel")
    labelLupa.setAttribute("class","icon icon-lupa2");
    iLupa,setAttribute("class", "icon-magnifying-glass");
}

// const cancelar = document.getElementById("iconCancel");
// cancelar.addEventListener("click", limpiar);
// function limpiar() {
//     document.getElementById("encabezado").innerHTML = "";
//     volver();
//}
function volver() {
   
    let contenedorEncabezado = document.getElementById("encabezado");
    
    let labelibarra = document.createElement("label");
    let textlabelbarra = document.createTextNode("☰");
    let imglogo = document.createElement("img");
    let labelIconCar = document.createElement("label");
    let iconCar = document.createElement("i");
    let labelIconLupa = document.createElement("label");
    let iconLupa = document.createElement("i");
    let labelIconUsuario = document.createElement("label");
    let iconUsuario = document.createElement("i");
   
   
    contenedorEncabezado.appendChild(labelibarra);
    labelibarra.appendChild(textlabelbarra);
    contenedorEncabezado.appendChild(imglogo);
    contenedorEncabezado.appendChild(labelIconLupa);
    labelIconLupa.appendChild(iconLupa);
    contenedorEncabezado.appendChild(labelIconCar);
    labelIconCar.appendChild(iconCar);
    contenedorEncabezado.appendChild(labelIconUsuario);
    labelIconUsuario.appendChild(iconUsuario);
    
    contenedorEncabezado.setAttribute("class","encabezado");
    labelibarra.setAttribute("class", "icono-barra");
    imglogo.setAttribute("class", "logohome");
    imglogo.setAttribute("src","img/LogoHomecenter.png");
    labelIconLupa.setAttribute("class","icon icon-lupa");
    iconLupa.setAttribute("id","idlupa");
    iconLupa.setAttribute("class","icon-magnifying-glass");
    labelIconCar.setAttribute("class","icon icono-carrito");
    iconCar.setAttribute("class","icon-shopping-cart");
    labelIconCar.setAttribute("class","icon icon-usuario");
    iconUsuario.setAttribute("class","icon-user");
}