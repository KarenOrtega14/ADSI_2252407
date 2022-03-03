// let nuevoNombre = "Evelin";
// let NombreAntiguo = "Daniela";

// function mostrarNuevoNombre(){
  
//     document.getElementById("mostrarNombre").innerHTML = nuevoNombre;
//     alert("El nombre ha sido cambiado con éxito")
// }
    
// function mostrarNombreAntiguo(){
// let nombreInterfaz = document.getElementById("mostrarNombre").innerHTML;
//     if (nombreInterfaz == NombreAntiguo) {
//         alert("El nombre actual es el nombre inicial")
        
//     } else {
//         document.getElementById("mostrarNombre").innerHTML = NombreAntiguo;
//     }
// }

let cantidadActual = document.getElementById("cantidadElem").innerHTML;

function aumentar() {
    if (cantidadActual <=9) {
        cantidadActual++;
        document.getElementById('cantidadElem').innerHTML = cantidadActual;
        document.getElementById('productoTotal').innerHTML = cantidadActual;
    }
    calcularTotal();
    
    }
function disminuir() {
       if (cantidadActual>=1) {
           cantidadActual--;
        
           document.getElementById('cantidadElem').innerHTML = cantidadActual;
           document.getElementById('productoTotal').innerHTML = cantidadActual;
           
       }
       calcularTotal();
  }
  function calcularTotal() {
      let valorUnidad= document.getElementById("precioUni").innerHTML;
      let cantidadElem = document.getElementById("cantidadElem").innerHTML;
    
      let valorCompra = valorUnidad*cantidadElem;
      document.getElementById("multiplicar").innerHTML = valorCompra;
  }