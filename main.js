// alert('Hola Mundo, desde una alerta en JavaScript')
//consola
 //console.log('Hola desde la consola');

 // declaración de una variable
 //let nombre = "Andrea";

 //concatenar texto y variable
 //console.log("Me llamo : ", nombre);
 // variables no pueden ser palabras reseradas
 // al nobrarlas usaremos un nombre que te de idea de lo q estas almacenando
 //constantes
 //const pi = 3.1416;

 //tipos de datos
 //número
 //let edad = 10;
 //cadena de txt
 //let saludo = "Holaaa";
 //boolean
 //let activo = true;
 //fecha
 // Operadores aritmeticos
// Suma +
// resta -
// Multiplicación *
// Dicisión /
// Modulo o residuo %
// increnmento ++
// decremento --

// Operadores relacionale
// mayor y menor que < >
// mayor o igual >=
// menor o igual <=
// igual que ==
// Diferente de !=

// Operadores lógicos
// y &&
// or ||
// not !
// control + }

// reloj digital
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    let reloj = document.querySelector('#reloj');
    reloj.innerHTML = time;
}


setInterval(currentTime, 1000);