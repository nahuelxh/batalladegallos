const MinPuntos = 5;
const MaxPuntos = 20;

let puntajeDaemon = 200;
let puntajeAemond = 200;
let asalto = 0;

function calcularFreestyle (){
    return Math.ceil(Math.random()*(MaxPuntos - MinPuntos) + MinPuntos)
}

const siguenEnBatalla = () => puntajeDaemon>0 && puntajeAemond>0

while(siguenEnBatalla()) {
asalto = asalto + 1;


let freestyleDaemon = calcularFreestyle()

let freestyleAemond = calcularFreestyle()

console.log("Asalto: " + asalto)

if (freestyleDaemon > freestyleAemond){
    puntajeAemond -= freestyleDaemon;
    console.log("Daemon rapea con un puntaje de " + freestyleDaemon)
} else {
    puntajeDaemon -= freestyleAemond;
    console.log("Aemond rapea con un puntaje de " + freestyleAemond)
}

console.log("Puntaje Aemond: " + puntajeAemond)
console.log("Puntaje Daemon: " + puntajeDaemon)

console.log("-----------------------------------------------------------------")
}

if(puntajeDaemon>0) {
    console.log("Daemon elimina a Aemond")
} else {
    console.log("Aemond elimina a Daemon")
}