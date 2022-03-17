window.onload = function () {
    recorrer();
}
class Vuelos {
    constructor(horaSalida, horaLlegada, destino, cuidadSal,){
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.destino = destino;
    }
}
let horaSalida1 = new Date(2022,03,18,10,15,0);
let horaSalida1Str= horaSalida1.getHours().toString() + ":" + horaSalida1.getMinutes().toString();

let horaLlegada1 = new Date(2022,03,18,2,25,0);
let horaLlegada1Str= horaLlegada1.getHours().toString() + ":" + horaLlegada1.getMinutes().toString();

let horaSalida2 = new Date(2022,03,18,8,10,0);
let horaSalida2Str= horaSalida2.getHours().toString() + ":" + horaSalida2.getMinutes().toString();

let horaLlegada2 = new Date(2022,03,18,10,20,0);
let horaLlegada2Str= horaLlegada2.getHours().toString() + ":" + horaLlegada2.getMinutes().toString();

let horaSalida3 = new Date(2022,03,18,6,10,0);
let horaSalida3Str= horaSalida2.getHours().toString() + ":" + horaSalida2.getMinutes().toString();

let horaLlegada3 = new Date(2022,03,18,9,20,0);
let horaLlegada3Str= horaLlegada3.getHours().toString() + ":" + horaLlegada3.getMinutes().toString();

let Vuelo =[
    {
        "horaSalida" : horaSalida1Str,
        "horaLlegada" : horaLlegada1Str,
        "destino" : "ADZ"
    },
    {
        "horaSalida" : horaSalida2Str,
        "horaLlegada" : horaLlegada1Str,
        "destino" : "CTG"
    },
    {
        "horaSalida" : horaSalida2Str,
        "horaLlegada" : horaLlegada3Str,
        "destino" : "CTG"
    }
];

function recorrer() {
    for(let i = 0; i < Vuelo.length; i++){
        let horaSalidaVuelo = Vuelo[i].horaSalida;
        let horaLlegadaVuelo = Vuelo[i].horaLlegada;
        let destinoVuelo = Vuelo[i].destino;
        mostrarInfo(horaSalidaVuelo,horaLlegadaVuelo,destinoVuelo)
    }
}
function mostrarInfo(horaSalidaVuelo,horaLlegadaVuelo,destinoVuelo) {
    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorInfoVuelos = document.createElement("div");

contenedorPrincipal.appendChild(contenedorInfoVuelos);

let labeltitulo = document.createElement("label")
let textoTitulo = document.createTextNode("viajes")
let labelhoraSal = document.createElement("label");
let textoHoraSal = document.createTextNode(horaSalidaVuelo);
let labelhoraLleg = document.createElement("label");
let textoHoraLleg = document.createTextNode(horaLlegadaVuelo);
let labelDestino = document.createElement("label");
let textoDestino = document.createTextNode(destinoVuelo);

contenedorInfoVuelos.appendChild(labeltitulo);
labeltitulo.appendChild(textoTitulo);
contenedorInfoVuelos.appendChild(labelhoraSal);
labelhoraSal.appendChild(textoHoraSal);
contenedorInfoVuelos.appendChild(labelhoraLleg);
labelhoraLleg.appendChild(textoHoraLleg);
contenedorInfoVuelos.appendChild(labelDestino);
labelDestino.appendChild(textoDestino);


contenedorInfoVuelos.setAttribute("class", "style-contentInfo");
 labeltitulo.setAttribute("class","titulo");
labelhoraSal.setAttribute("class","horaSal");
labelhoraLleg.setAttribute("class","horaLleg");
labelDestino.setAttribute("class","destino");

}






// alert("La hora de salida es  " + Vuelo[0].horaSalida + ", la hora de llegada "+  Vuelo[0].horaLlegada + " el destino es " + Vuelo[0].destino);