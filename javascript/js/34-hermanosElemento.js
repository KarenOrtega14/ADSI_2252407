function obtenerHermanos() {
    let hijosDiv = document.getElementById("hermanos");
    let elemento3 = hijosDiv.childNodes[5];
    let nextHermano = elemento3.nextElementSibling.innerHtml;
    alert(nextHermano);
    let previousHermano = elemento3.previousElementSibling.innerHtml;
    alert(previousHermano);
}