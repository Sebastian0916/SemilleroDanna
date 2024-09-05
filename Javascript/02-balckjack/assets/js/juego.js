//funcion anonima auto invocada
const Mimundo = (() => {
  "use strict";
  let deck = [];//representa las cartas
  const tipos = ["C", "D", "H", "S"],
    especiales = ["A", "J", "Q", "K"];

  let puntosJugadores = [];//almacena los puntos de los jugadores

  //referencias del html
  const btnPedir = document.querySelector("#btnPedir"),
    btnDetener = document.querySelector("#btnDetener"),
    btnNuevo = document.querySelector("#btnNuevo");

  const divCartasJugadores = document.querySelectorAll(".divCartas"),
    puntosHtml = document.querySelectorAll("small");

  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck();
    puntosJugadores = [];// limpia el marcador de puntos
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0);// añade un puntaje de cero
    }
    puntosHtml.forEach((elem) => (elem.innerText = 0));//reinicia el puntaje en la interface
    divCartasJugadores.forEach((elem) => (elem.innerText = ""));//elimina las cartas
    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

  const crearDeck = () => {
    deck = [];
    for (let i = 2; i <= 10; i++) {
      for (let tipo of tipos) {
        deck.push(i + tipo);
      }
    }

    for (let tipo of tipos) {
      for (let esp of especiales) {
        deck.push(esp + tipo);
      }
    }

    console.log(deck);
    return deck;
    //return _.shuffle(deck);
  };

  //funcion pedir carta

  const pedirCarta = () => {
    if (deck.length === 0) {
      throw "no hay cartasen el deck";
    }

    return deck.pop();
  };

  //pedirCarta();

  const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;//convierte una cadena a numero
  };

  // turno:= primer jugador y el ultimo sera la computadora
  const acumularPuntos = (carta, turno) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHtml[turno].innerText = puntosJugadores[turno];//actualiza los puntos del dom
    return puntosJugadores[turno];
  };


  const crearCarta = (carta, turno) => {
    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
};

  const determinarGanador = () => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
      if (puntosComputadora === puntosMinimos) {
        alert("nadie gana");
      } else if (puntosMinimos > 21) {
        alert("computadora gana");
      } else if (puntosComputadora > 21) {
        alert("jugador gana");
      } else {
        alert("computadora gana");
      }
    }, 20);
  };
  //Computadora
  const turnoComputadora = (puntosMinimos) => {
    let puntosComputadora = 0;
    do {
      const carta = pedirCarta();//para obtener una carta de la baraja
      acumularPuntos(carta, puntosJugadores.length - 1);//suma los puntos de la carta con los de la computadora
      crearCarta(carta, puntosJugadores.length - 1);
    } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

    determinarGanador();
  };

  //Eventos
  btnPedir.addEventListener("click", () => {
    const carta = pedirCarta();
    const puntosJugador = acumularPuntos(carta, 0);//suma los puntos aljugador
    crearCarta(carta, 0);//le da una carta al jugador

    if (puntosJugador > 21) {
      console.warn("perdiste");
      btnPedir.disabled = true;
      btnDetener.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      console.warn("ganaste");
      btnPedir.disabled = true;
    }
  });

  btnDetener.addEventListener("click", () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
  });

  btnNuevo.addEventListener("click", () => {
    inicializarJuego();
  });
 

})();
