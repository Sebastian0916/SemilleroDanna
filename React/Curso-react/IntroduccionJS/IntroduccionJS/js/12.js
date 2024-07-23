const tecnologias =['html','css','Java','reactjs','node'] 

// for(let i = 0; i< tecnologias.length; i++){

//     console.log(tecnologias[i])
// }

//forEach ejecuta una funcionn dada por la cantidad de veces que tiene un arreglo


tecnologias.forEach(function(tech){
    console.log(tech)
})

//map genera un arreglo nuevo en base a la funcion
const arrayMap = tecnologias.map(function(tech){
    return tech
})

console.log(arrayMap)

//for ... of

for (let tech of tecnologias){
    console.log (tech)
}