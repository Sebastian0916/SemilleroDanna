//Objetos-manipulacion 

const producto = {
    nombre:'tablet',
    precio:300,
    disponible :false
}
//no deja modificarlo ni agegar nada 
Object.freeze(producto)

//permite modificar las propiedades existentes pero no permite añadir nuevas ni eliminar
Object.seal(producto)

//reescribir valor
producto.disponible = true

// si no existe lo va a añadir
producto.imagen = 'imagen.jpg'

//eliminar un producto
//delete.producto.precio


console.log(producto)

//