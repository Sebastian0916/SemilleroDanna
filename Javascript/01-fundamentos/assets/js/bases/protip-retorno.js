// function crearPersona(nombre,apellido){
//     return{nombre,apellido}
// }

const  crearPersona=(nombre,apellido)=>({nombre,apellido})


const persona =crearPersona('fernando','herrera');
console.log(persona);