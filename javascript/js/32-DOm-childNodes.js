function leerInfo() {
    let info = document.getElementById("content");
    let infoChild = info.childNodes[7];
    let contents =  infoChild.innerHTML;
    alert(contents);
}
function disponibilidad() {
 let nodoCounter=0;
 let nodos = document.getElementById("viajes"); 
 for(let i=0; i <= nodos.childNodes.length;i++){
     if (nodos.childNodes[i].nodeType ===1) {
       nodoCounter++;  
     }
     if (nodoCounter ===3) {
         nodos.childNodes[i].innerHTML = "Agotado";
         nodos.childNodes[i].style.color= "red"
     }
 }
}