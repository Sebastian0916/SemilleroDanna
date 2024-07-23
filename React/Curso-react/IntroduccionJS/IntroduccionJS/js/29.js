//Manipular elementos html con js
const heading = document.querySelector('heading')   
const enlaces =document.querySelectorAll('navegacion a')//colecciones

heading.textContent = 'Un nuevo heading'
heading.id = 'un nuevo id'

//Eliminar 

heading.removeAttribute('id')

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'un nuevo valor'

//acceder a todos
enlaces.forEach(enlace => enlace.textContent = 'Nuevo enlace')

//acceder a cada uno 
enlaces[0].textContent = 'nuevo enlace'
