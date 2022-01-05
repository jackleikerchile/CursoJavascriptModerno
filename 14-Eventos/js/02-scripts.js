const nav = document.querySelector('.navegacion')

// registrar un evento

// Click a un elemento
// nav.addEventListener('click', () => {
//   console.log('click en nav');
// })

// Entrando a un elemento
// nav.addEventListener('mouseenter', () => {
//   console.log('Enter in the Navbar');
//   nav.style.backgroundColor = 'white';
// })

// // Saliendo de un elemento
// nav.addEventListener('mouseout', () => {
//   console.log('Exit of the Navbar');
//   nav.style.backgroundColor = 'transparent';
// })

// Cuando doy click y suelto el mouse
// nav.addEventListener('mouseup', () => {
//   console.log('Cuando doy click y suelto el mouse');
//   nav.style.backgroundColor = 'white';
// })

// Cuando le das doble click
nav.addEventListener('dblclick', () => {
  console.log('Cuando doy doble click');
  nav.style.backgroundColor = 'white';
})

// mousedown - similar al click
// click
// dblclick = doble click
// mouseup - cuando sueltas el mouse