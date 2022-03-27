function obtenerNodeName() {
    let parent= document.getElementById("nombre-nodo");
    let etiqueta = parent.firstChild;
    alert("El contenido del elmento es: "+ etiqueta.nodeName);
    let etiqueta2 = parent.firstElementChild;
    alert("El contenido de la etiqueta 2 es: "+ etiqueta2)
}