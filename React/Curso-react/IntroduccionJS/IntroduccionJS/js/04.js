//Objetos
//un objeto es una coleccion de propiedades 
//y una propiedad es una asociacion entre un nombre o clave

const producto = {
    nombre:'tablet',
    precio:300,
    disponible :false
}
console.log( producto)
console.log( producto.nombre)
console.table (typeof producto)

//destructuring

// const {nombre} =producto
// console.log (nombre)

// const {nombre,precio,disponible} =producto
// console.log (nombre,precio,disponible)

//object literal enhacement
const autenticado = true
const usuario = 'Juan'

const nuevoObjeto = {
    autenticado,//se pone asi cuando la clave y el valor se llaman igual 
    usuario
}

console.log (nuevoObjeto)