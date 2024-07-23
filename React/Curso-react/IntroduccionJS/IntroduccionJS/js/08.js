//template strings y concatenacion

const producto = "tablet de 12 pulgadas";
const precio = 400;
const marca = "orange";

console.log("el producto es:" + producto);
console.log(`el producto es: ${producto}`);

console.log(producto + " $" + precio + "dolares,marca: " + marca);
//con template strings
console.log(`${producto} $${precio} Dolares,marca: ${marca}`);

console.log(precio);
console.log(marca);
