const fer = {
  nombre: "Fernando",
  edad: 20,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad:${this.edad}`);
  },
};
const pedro = {
  nombre: "pedro",
  edad: 30,
};

fer.imprimir();

function Persona(nombre, edad) {
  console.log("se ejecuto");
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function() {
    console.log(`Nombre: ${this.nombre} - edad:${this.edad}`);
  };
}


const maria = new Persona('maria',18);
const melissa = new Persona('melissa',18);
// console.log(maria);
maria.imprimir();
melissa.imprimir();
