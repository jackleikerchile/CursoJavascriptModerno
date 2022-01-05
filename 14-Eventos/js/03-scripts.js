const search = document.querySelector('.busqueda');

// "keydown" cuando escribes en un input por teclado ejecuta la funcion
// search.addEventListener('keydown', () => {
//   console.log('Writing.....');
// })


// "keyup" Cuando presionas y sueltas esa tecla ejecuta la funcion
// search.addEventListener('keyup', () => {
//   console.log('Writing.....');
// })

// "blur" cundo presiono el input y cuando doy click por fuera ejecuta la funcion
// search.addEventListener('blur', () => {
//   console.log('Writing.....');
// })

// "copy" cuando copio un texto Ctrl+C en el input ejecuta la funcion 
// search.addEventListener('copy', () => {
//   console.log('Writing.....');
// })

// "paste" cuando pego un texto en el input se ejcuta la funcion
// search.addEventListener('paste', () => {
//   console.log('Writing.....');
// })

// "cut" cuando corto un texto en el input se ejcuta la funcion
// search.addEventListener('cut', () => {
//   console.log('Writing.....');
// })

// "input" Realiza todos los eventos anterios ecepto el blur no lo realiza
// search.addEventListener('input', () => {
//   console.log('Writing.....');
// })

search.addEventListener('input', (event) => {
  if (event.target.value === '') {
    console.log('fallo la validacion');
  }
})

