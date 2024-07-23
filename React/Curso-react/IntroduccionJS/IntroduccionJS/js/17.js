const tecnologias = ["html", "css", "Java", "reactjs", "node"];
const numeros = [10, 20, 30];

//filter

// const nuevoArray = tecnologias.filter((tech)=>tech !== 'html')
// const resultado = numeros.filter((numero)=>numero >15)
// console.log(nuevoArray)
console.log(resultado);
console.log(numeros);
console.log(tecnologias);

//Includes
//const resultado = tecnologias.includes('css')

//Some - devuelve si al menos uno cumple la condicion
//const resultado = numeros.some(numero=>numero >15)

//find devuelve el primer elemento que cumpla una condicion
//const resultado = numeros.some(numero=>numero >15)

//Every retorna true o false si todos cumplen la condicion
//const resultado = numeros.some(numero=>numero >5)

//reduce retorna un acumulado del total
const resultado = numeros.reduce((total, numero) => total + numero, 0);
