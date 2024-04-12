"use strict";

//Inicialización de variables
var tarjetasDestapadas = 0;
var tarjeta1 = null;
var tarjeta2 = null;
var primerResultado = null;
var segundoResultado = null;
var movimientos = 0;
var aciertos = 0;
var temporizador = false;
var timer = 30;
var timerInicial = 30;
var tiempoRegresivoId = null; //Apuntando a documento HTML

var mostrarMovimientos = document.getElementById('movimientos');
var mostrarAciertos = document.getElementById('aciertos');
var mostrarTiempo = document.getElementById('t-restante'); //Generación de números aleatorios

var numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(function () {
  return Math.random() - 0.5;
});
console.log(numeors); //Funciones

function contarTiempo() {
  tiempoRegresivoId = setInterval(function () {
    timer--;
    mostrarTiempo.innerHTML = "Tiempo: ".concat(timer, " segundos");

    if (timer == 0) {
      clearInterval(tempoRegresicoId);
      bloquearTarjetas();
    }
  }, 1000);
}

function bloquearTarjetas() {
  for (var i = 0; i <= 15; i++) {
    var tarjetaBloqueada = document.getElementById(i);
    tarjetaBloqueada.innerHTML = numeros[i];
    tarjetaBloqueada.disabled = true;
  }
} //Función principal


function destapar(id) {
  if (temporizador == false) {
    contarTiempo();
    temporizador = true;
  }

  tarjetasDestapadas++;
  console.log(tarjetasDestapadas);

  if (tarjetasDestapadas == 1) {
    //Mostrar primero número
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = primerResultado; //Deshabilitar primer botón

    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas == 2) {
    //Mostrar segundo numero
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = segundoResultado; //Deshabilitar segundo botón

    tarjeta2.disabled = true; //Incrementar movimientos

    movimientos++;
    mostrarMovimientos.innerHTML = "Movimientos: ".concat(moviminetos);

    if (primerResultado == segundoResultado) {
      //Encerar contador tarjetas destapadas
      tarjetasDestapadas = 0; //Aumentar aciertos

      aciertos++;
      mostrarAciertos.innerHTML = "Aciertos: ".concat(aciertos);

      if (aciertos == 8) {
        clearInterval(tiempoRegresivoId);
        mostrarAciertos.innerHTML = "Aciertos: ".concat(aciertos);
        mostrarTiempo.innerHTML = "Fant\xE1stico! S\xF3lo demoraste ".concat(timerInicial - timer, " segundos");
        mostrarMovimientos.innerHTML = "Movimientos: ".concat(moviminetos);
      }
    } else {
      //Mostrat momentaneamente valores y volver a tapar
      setTimeout(function () {
        tarjeta1.innerHTML = ' ';
        tarjeta2.innerHTML = ' ';
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
      }, 800);
    }
  }
}
//# sourceMappingURL=main.dev.js.map
