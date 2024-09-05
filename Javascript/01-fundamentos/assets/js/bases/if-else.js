let a = 5;

if (a >= 10) {
  console.log("A es mayor o igual a 10");
} else {
  console.log("A es menor a 10");
}

//console.log ('fin del programa');

const hoy = new Date();
let dia = hoy.getDay();

console.log({ dia });

if (dia == 1) {
  console.log("Domingo");
} else if(dia===1) {
    console.log("lunes");
}else if(dia===2){
    console.log("martes");
}

let dias= 2;
const diasLetras = {
    0:'domingo ',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado',
}

console.log(diasLetras[dias]|| 'dia no definido')