"use strict"
/*Obtener la fecha y hora GMT del navegador*/
console.log("===Fecha Y Hora===");
var timeGMT = new Date();
console.log(timeGMT);

/*Convertir fecha a string*/
console.log("===Fecha Y Hora Local===");
var timeCurrentStr = new Date();
console.log(timeCurrentStr.toString());

/*Extraer Elementos de la fecha */
/*Extraer Elementos de día */
console.log("===Obteniendo el día===");
var numDiaSemana = new Date();
/*EL DIA DOMINGO ES 0 */
/*El dia sabado es 6 */
console.log(numDiaSemana.getDay());

/*Mostrando el dia de la semana con swicht*/
console.log("===Mostrar nombre dia de la semana===");
/*Llamamos la funcion */
obtenerDia();

function obtenerDia() {
    var diaStr = "";
    var fechaActual = new Date();
    var diaActual = fechaActual.getDay();
    switch (diaActual) {
        case 0:
            console.log("El dia de la semana es Domingo")
            break;
        case 1:
            console.log("El dia de la semana es Lunes")
            break;
        case 2:
            console.log("El dia de la semana es Martes")
            break;
        case 3:
            console.log("El dia de la semana es Miercoles")
            break;
        case 4:
            console.log("El dia de la semana es Jueves")
            break;
        case 5:
            console.log("El dia de la semana es Viernes")
            break;
        case 6:
            console.log("El dia de la semana es Sabado")
            break;

    }
}
/*Mostrando el dia de la semana con arreglos*/
var numDia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
var fechaActual2 = new Date();
var diaActualNumero = fechaActual2.getDay();
console.log("Hoy es: " + numDia[diaActualNumero]);


/*Metodos mas comunes */
console.log("===Fecha y hora local desfragmentada===");
var currentTime = new Date();
console.log("Dia de la semana: " + currentTime.getDay());
console.log("Mes del año: " + currentTime.getMonth());
console.log("Dia del mes: " + currentTime.getDate());
console.log("Año: " + currentTime.getFullYear());
console.log("Hora: " + currentTime.getHours());
console.log("Minutos: " + currentTime.getMinutes());
console.log("Segundos: " + currentTime.getSeconds());
console.log("Milisegundos: " + currentTime.getMilliseconds());


/*Ejercicio */
var nDia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
var nMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

var fechaActual = new Date();
var diaActual = fechaActual.getDay();
var diaMes = fechaActual.getDate();
var diaMesActual = fechaActual.getMonth();
var anio = fechaActual.getUTCFullYear();
var hora = fechaActual.getHours();
var minutos = fechaActual.getMinutes();
var setMorningAfternoon = "";
var hour = hora - 12;

if (hora > 12) {
    setMorningAfternoon = " p.m "
    hora = hora - 12;
} else {
    setMorningAfternoon = " a.m "
}

/*Agregar un 0 a los minutos en caso de que sea menor a 10 minutos */
if (minutos < 10) {
    minutos = "0" + minutos.toString();
}
console.log("Hoy es " + nDia[diaActual] + ", " + diaMes + " de " + nMes[diaMesActual] + " del " + anio + "\n" +
    "Son las " + hora + ":" + minutos + setMorningAfternoon + "\n" + "!!Bienvenido!!");



/*Saber cuanto tiempo falta para llegar a determinada fecha */
/*Ej. Navidad */
/*Puedo agregar una fecha de froma similar a como se averigua la fecha actual */
var fechaNavidad = new Date("December 24, 2021");
var fechaHoy = new Date();

//Hallamos los miliseguendos  transcurridos hasta el dia de hoy
var msToday = fechaHoy.getTime();
var msNavidad = fechaNavidad.getTime()
var msFaltantes = msNavidad - msToday;
var sgFaltantes = msFaltantes / 1000;
var mnFaltantes = sgFaltantes / 60;
var hFaltantes = mnFaltantes / 60;
var dFaltantes = hFaltantes / 24;


console.log(Math.floor(dFaltantes));
/*Primer punto del instructivo */
/*Saber cuanto tiempo falta para llegar a mi cumpleaños */
var fechaCumple = new Date("June 14, 2022");
var fechaHoy = new Date();

//Hallamos los miliseguendos  transcurridos hasta el dia de hoy
var msActual = fechaHoy.getTime();
var msCumple = fechaCumple.getTime()
var msRestantes = msCumple - msToday;
var sgRestantes = msRestantes / 1000;
var mnRestantes = sgRestantes / 60;
var hRestantes = mnRestantes / 60;
var dRestantes = hRestantes / 24;

console.log("Faltan " + Math.ceil(dRestantes) + " para el dia de su cumpleaños");


/*Segundo Punto del instructivo */
var currentTime = new Date();
var dateHappyBirthday = new Date("December 1, 2003");

var monthCumple = dateHappyBirthday.getMonth();
var dayCumple = dateHappyBirthday.getDate();

var mesFecha = currentTime.getMonth();
var diaFecha = currentTime.getDate();

if (mesFecha == monthCumple && diaFecha == dayCumple) {
    console.log("Felicitaciones, hoy cumples años");
} else {
    console.log("Hoy no es su cumpleaños")
}

/*Tercer Punto del Instructivo */
var fechaNacimiento = new Date("November 12, 2003");
var fechaFuturo = new Date("November 13, 2028");

var yearNacimiento = fechaNacimiento.getFullYear();
var monthNacimiento = fechaNacimiento.getMonth();
var dayNacimiento = fechaNacimiento.getDate();

var yearFuturo = fechaFuturo.getFullYear();
var monthFuturo = fechaFuturo.getMonth();
var dayFuturo = fechaFuturo.getDate();

var edad = 0;
edad = yearFuturo - yearNacimiento;

if (yearNacimiento < yearFuturo) {
    if (monthNacimiento < monthFuturo) {
        edad = yearFuturo - yearNacimiento;
    } else if (monthNacimiento === monthFuturo && dayNacimiento <= dayFuturo) {

    } else {
        edad = edad - 1;
    }
} else if (yearNacimiento === yearFuturo) {
    console.log("Edad: 0 años")
} else {
    console.log("los datos ingresados son incorrectos");
}
console.log("Usted tendra " + edad + " años");