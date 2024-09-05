class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + ' instancias';
  }

  static mensaje() {
    console.log("hola");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "sin nombre",
    codigo = "sin codigo",
    frase = "sin frase"
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }

  get getComidaFavorita() {
    return `la comida favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`soy ${this.nombre} mi identidad es ${this.codigo}`);
  }
  miFrase() {
    this.quienSoy();
    console.log(` ${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona("peter", "spiderman", "amigo");
const ironman = new Persona("tony", "ironman", "amigo");

// console.log(ironman);
// spiderman.quienSoy();
// ironman.quienSoy();
// spiderman.miFrase();
// ironman.miFrase();
// spiderman.setComidaFavorita = "pie de cereza";
// console.log(spiderman.getComidaFavorita);
console.log("conteo estatico", Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();
Persona.propiedadexterna = 'holis';
console.log(Persona);

