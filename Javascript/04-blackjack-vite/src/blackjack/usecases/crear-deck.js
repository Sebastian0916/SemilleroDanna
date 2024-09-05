
import _ from "underscore";

/**
 * 
 * @param {Array<String>} tiposCartas 
 * @param {Array<String>} tiposEspeciales 
 * @returns {Array<String>} retorna un nuevo deck
 */

export const crearDeck = (tiposCartas, tiposEspeciales) => {
  let deck = [];
if (!tiposCartas || tiposCartas.length===0)throw new Error("Tiposdecarta es obligatorio");
if (!tiposEspeciales || tiposEspeciales.length===0)throw new Error("Tiposespeciales es obligatorio");

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposCartas) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposCartas) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }
  // console.log( deck );
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
};
