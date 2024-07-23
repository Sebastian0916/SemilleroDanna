//Destruturacion de dos o mas objetos
const producto = {
    nombre:'tablet',
    precio:300,
    disponible :false
}

const cliente={
    nombre:'juan',
    premium: true,
    direccion:{
        calle:'Calle Mexico'
    }
}

const{nombre}=producto
const{nombre:nombreCliente,direccion:{calle}}=cliente

console.log(nombre)
console.log(calle)
console.log(nombreCliente)


