//opcional chaining'?'
const alumno = {
  nombre: "juan",
  clase: "programacion 1",
  aprobado: true,
  examenes:{
    examen1:90
  }
};
console.log (alumno.examenes?.examenes1)

console.log('Despues de ALUMNO')


//Nullish coalescing operator (??)
const pagina = 10 ?? 1
console.log(pagina)
