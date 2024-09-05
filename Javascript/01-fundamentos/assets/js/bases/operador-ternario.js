const dia = 6;
const horaActual = 11;

let horaApertura;
let mensaje;

//if (dia === 0 || dia === 6) {
// if ([0,6].includes(dia)){
//   console.log("fin de semana");
//   horaApertura = 9;
// } else {
//   console.log("dia de semana");
//   horaApertura = 11;
// }

horaApertura =([0,6].includes(dia)) ? 9 : 11

// if (horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// } else {
//     mensaje = `esta cerrado hoy abrimos ${horaApertura}`
// }

mensaje= (horaActual >= horaApertura) ? 'Esta abierto' : `esta cerrado hoy abrimos ${horaApertura}`
    
    

console.log({ horaApertura, mensaje });
