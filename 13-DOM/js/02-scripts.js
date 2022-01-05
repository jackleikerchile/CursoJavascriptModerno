// Seleccionar elementos  por su clase

const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si las clases existen mas de 1 vez
const contenedor = document.getElementsByClassName('contenedor')
console.log(contenedor);

const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);