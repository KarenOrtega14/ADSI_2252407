class Automovil {
    constructor(marca, modelo, version, anyo, precio, kilometraje, motor, ciudad, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.anyo = anyo;
        this.precio = precio;
        this.kilometraje = kilometraje;
        this.motor = motor;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let auto = new Automovil("Mazda", "3", 2019);

let auto1 = new Automovil("Mazda", "3", "Touring", 2015, 41500000, 65800, 2000, "Medellín", "img/mazda3_2015.jpeg");
let auto2 = new Automovil("Mazda", "3", "Touring", 2019, 73900000, 22090, 2000, "Bogotá", "img/mazda3_2019.jpeg");
let auto3 = new Automovil("Mazda", "3", "Prime", 2021, 82500000, 12650, 2000, "Cali", "img/mazda3_2021.jpeg");
let auto4 = new Automovil("Mazda", "3", "Touring", 2019, 73900000, 22090, 2000, "Medellín", "img/mazda3_2022.jpeg");
let auto5 = new Automovil("Toyota", "Corolla", "Seg", 2020, 81900000, 29090, 2000, "Bogotá", "img/Toyota_2020_corolla.jpeg");


function mostrarVehiculo(auto) {

    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorImg = document.createElement("div");
    let imgAuto = document.createElement("img");
    let valorAuto = document.createElement("label");
    let textoValorAuto = document.createTextNode("$" + auto.precio);
    let anyoVehiculo = document.createElement("label");
    let textoAnyoVehiculo = document.createTextNode(auto.anyo);
    let kilometrajeVehiculo = document.createElement("label");
    let textoKilometrajeVehiculo = document.createTextNode(auto.anyo + " - " + auto.kilometraje + "km" + " - " + auto.ciudad);
    let descripcionVehiculo = document.createElement("label");
    let textoDescripcionVehiculo = document.createTextNode(auto.marca + " " + auto.version);

    contenedorPrincipal.appendChild(contenedorImg);
    contenedorImg.appendChild(imgAuto);
    contenedorImg.appendChild(valorAuto);
    anyoVehiculo.appendChild(textoAnyoVehiculo);
    contenedorImg.appendChild(kilometrajeVehiculo);
    valorAuto.appendChild(textoValorAuto);
    kilometrajeVehiculo.appendChild(textoKilometrajeVehiculo);
    descripcionVehiculo.appendChild(textoDescripcionVehiculo);
    contenedorImg.appendChild(descripcionVehiculo);

    contenedorImg.setAttribute("class", "style-contentImg");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-style");
    valorAuto.setAttribute("class", "style-precio");
    kilometrajeVehiculo.setAttribute("class", "style-kilometraje");
    anyoVehiculo.setAttribute("class", "style-anyo");
    descripcionVehiculo.setAttribute("class", "style-descripcion");
   
    auto.precio = new Intl.NumberFormat('es-ES', {}).format(auto.precio);   
   
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if(event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Mazda 3") {
            mostrarVehiculo(auto1);
            mostrarVehiculo(auto2);
            mostrarVehiculo(auto3);
            mostrarVehiculo(auto4);
        }
        else if (busqueda == "Toyota Corolla") {
            mostrarVehiculo(auto5);
        }
        else {
        this.alert("No se han encontrado coincidencias.");
        }
    }
});
function limpiarVentana() {
    document.getElementById("main-content").innerHTML = "";
}
