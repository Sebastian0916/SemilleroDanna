class Persona {

    static porObjeto({nombre,apellido,pais}){
        return new Persona(nombre,apellido,pais);
    }

  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }
  getInfo(){
    console.log (`info: ${this.nombre},${this.apellido},${this.pais}`)
  }
}

const nombre1 = 'melissa',apellido1= 'flores', pais1='honduras';
const fher = {nombre:'melissa',apellido: 'flores', pais:'honduras'};


const person1 =new Persona(nombre1,apellido1,pais1);
const persona2 = Persona.porObjeto(fher); 
person1.getInfo();
persona2.getInfo();

