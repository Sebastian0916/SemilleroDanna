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
      codigo = "sin nombre",
      frase = "sin nombre"
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

  class Heroe extends Persona{
    clan = ' sin clan';
    constructor(nombre,codigo,frase){
        super(nombre,codigo,frase);
        this.clan='avengers'

    }
    quienSoy(){
        console.log(`soy ${this.nombre}, ${this.clan} `);
        super.quienSoy();
    }
  }

//   const spiderman = new Persona("peter", "spiderman", "amigo");
  const spiderman = new Heroe("peter", "spiderman", "amigo");
  console.log(spiderman);