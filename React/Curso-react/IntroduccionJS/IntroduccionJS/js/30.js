//Eventos del dom - cliks

//const heading = document.querySelector(".heading");
const enlaces =document.querySelectorAll('.navegacion a')


// heading.addEventListener('mouseenter', () => {
//   heading.textContent = "nuevo heading al dar click";
// });
enlaces.forEach(enlace => {
    
    enlace.addEventListener('click', (e)=>{
        e.preventDefault()
        e.target.textContent = 'diste click'
    });
    
});

console.log(enlaces);
