"use strict"

var fechaActual = new Date();
var anyoActual = fechaActual.getFullYear();
var mesActual = fechaActual.getMonth();
var diaActual = fechaActual.getDate();
var horaActual = fechaActual.getHours();
var minutosActual = fechaActual.getMinutes();

mostraHora();

function mostraHora() {

    var setMorningAfternoon = "";
    var hour = horaActual - 12;

    if (horaActual > 12) {
        setMorningAfternoon = " p.m "
        horaActual = horaActual - 12;
    }
    if (horaActual < 10) {
        horaActual = "0" + horaActual.toString();
    } else {
        setMorningAfternoon = " a.m "
    }

    if (minutosActual < 10) {
        minutosActual = "0" + minutosActual.toString();
    }
    alert("Hora Actual: " + horaActual + ":" + minutosActual + setMorningAfternoon);
}

function mostrarFecha() {

    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    alert("Hoy es " + diaActual + " de " + meses[mesActual] + " del año " + anyoActual)
}
/*Función con parametros */


function saludo(saludoNavidad) {
    var saludoSencillo = "Bienvenidos";
    if (mesActual === 11) {
        alert(saludoSencillo + ", " + saludoNavidad);
    } else {
        alert(saludoSencillo);
    }
}

function presentacion(name, ficha) {
    var nombre = "Mi nombre es ";
    var titulado = " y soy del titulado "
    if (mesActual === 11) {
        alert(nombre + name + titulado + ficha);
    } else {
        alert(saludoSencillo);
    }
}
// Funcion con retorno
//Si la compra es superior a 10 mil tiene 10% de descuento.
// Si la compra esta entre en 5000 y 9999 tiene 5% de descuento.
function validarDescuento(compra) {
    var total = 0;
    if (compra >= 10000) {
        total = compra * .9;
    } else if (compra >= 5000 && compra <= 9999) {
        total = compra * .95;
    } else {
        total = -1
    }
    return total;
}

function calcularDescuento(costo) {
    if (costo === -1) {
        alert("Ha surgido un problema");
    } else if (costo >= 1) {
        alert("Costo total: " + validarDescuento(costo));
    }

}