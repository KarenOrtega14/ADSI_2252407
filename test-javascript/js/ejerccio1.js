/*Imprimir en consola un hola mundo */
console.log("Hola Mundo");

/*Segundo */
let nombre= "karen";
console.log("hola!! bienvenido, sr(a) "+nombre);

/*tercero*/
/*Declarar un costo de determinado producto 
y aagregar impuesto y valor domicilio,
 al final hallar el valor total */
 let costo= 2000;
 let impuesto= 5;
 let v_domicilio= 1000;
 let costoTotal= "";

 costoTotal= costo +(costo*impuesto/100) + v_domicilio;

 console.log(" El costo total es: " + costoTotal)

/*ejercicio 4
DEclar el descuento de una compra y determinar el descuento dependiendo del costo
1. si el costo es menor o igual a 30.000 descuento 5%
2.si es mayor a 30.000 menor a 100.000 10%
3.igual o mayor a 100.000 es del 15%*/

let monto = 100000;
let descuento= "";
let montoTotal= "";

if (monto <= 30000) {
    descuento = (monto * .05); 
}
else if (monto>30000 && monto<100000) {
        descuento= (monto*10)/100;
}
else if (monto>=100000){
    descuento= (monto*15)/100;
}

montoTotal= monto - descuento;
console.log("el costo total es " + montoTotal)

//Crear un arreglo que contega los nombres de cada uno de nosotros y recorrer dicho arreglo.

let nombres= ["Karen","Daniela","Evelin", "Fransisco","David"];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//declar una cadena de texto y convertir la primera letra a mayusculas y el resto de letras a minusculas.

let municipio= ["pitalito"];


 console.log();
