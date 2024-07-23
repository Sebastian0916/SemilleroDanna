const tecnologias =['html','css','Java','react','node']
// const tecnologias2 = tecnologias.filter(function(tech){
//     if (tech !== 'html'){
//         return tech
//     }
// })

const tecnologias2 = tecnologias.map(function(tech){
    if (tech === 'node'){
        return 'nest'
    } else {
        return tech
    }
})

console.table(tecnologias)
console.log(tecnologias2)


//tecnologias.shift()
// tecnologias.push=('nest')
// //aparece de ultimas pq se coloco al final
// const nuevoArreglo = [...tecnologias,'nest']
// console.table(nuevoArreglo)