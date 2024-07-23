//unir 2 o mas objetos
const producto = {
    nombre:'tablet',
    precio:300,
    disponible :false
}

const cliente={
    nombre:'juan',
    premium: true
}
// const carrito  ={
//     cantidad:1,
//     ...producto //...spread operator
// }

const nuevoObjeto={
    ...producto,
    ...cliente
}
console.log(nuevoObjeto)

//obtiene una copia
const nuevoObjeto2 = Object.assign(producto, cliente)
console.log(nuevoObjeto2)

// console.log(carrito.nombre)
