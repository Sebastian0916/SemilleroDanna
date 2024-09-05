const personaje = {
  nombre: "tony",
  codeName: "iron man",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.8,
  },
  trajes: ["Mark I", "Mark V","Hulkbuster"],
  direcion: {
    zip: "10880,2345678",
    ubicacion: "malibu",
  },
  'ultima-pelicula':'infinity war'
};

console.log("nombre", personaje.nombre);
console.log("Edad", personaje.edad);
console.log("nombre", personaje["nombre"]);
console.log("coords", personaje.coords.lat);
console.log("trajes", personaje.trajes.length);
console.log("ultimo trajes", personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('vivo', personaje[x]);
console.log('ultima-pelicula',personaje['ultima-pelicula'])


delete personaje.edad;
console.log(personaje)

personaje.casado= true;

const entreisPares = Object.entries(personaje);
console.log (entreisPares)



Object.freeze(personaje);

personaje.dinero= 123456789;
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.getOwnPropertyNames(personaje);
console.log(propiedades,valores);
