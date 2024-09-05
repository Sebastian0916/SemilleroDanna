function saludar(nombre) {
//   console.log(arguments);
//   console.log("hola" + nombre);
  return [1,2];
  console.log('Soy un codigo que esta despues del return')//nuncaa se va a ejecutar

}

const saludar2 = function (nombre) {
  console.log("hola" + nombre);
};

const saludarFlecha = () => {
    console.log('hola flecha');
};

const saludarFlecha2 = () => {
    console.log('hola'+ nombre);
};

const retornoDeSaludar = saludar('fernando ',40,true,'costa rica');
//console.log (retornoDeSaludar[0],retornoDeSaludar[1]);

// saludarFlecha();
// saludarFlecha2('melisa');

function sumar (a,b) {
return a+b;
}

// const sumar2 = (a,b)=>{
//     return a+b;
// }

const sumar2 = (a,b)=> a+b;// se pone asi cuando hay una sola linea

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () =>  Math.random();



console.log (getAleatorio2());