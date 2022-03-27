function obtenerPadre() {
    let divContent = document.getElementById("content-1");
    let padreDivContent = divContent.parentNode.nodeName;
    alert(padreDivContent);
}