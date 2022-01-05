const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titleDiv = document.querySelector('.titulo');


// Event Bubbling que se propaga cundo le doy click a un lemento y al siguiente y luego al sigiente se propaga
// cardDiv.addEventListener('click', () => {
//   console.log('click en card');
// })

// infoDiv.addEventListener('click', () => {
//   console.log('click en info');
// })

// titleDiv.addEventListener('click', () => {
//   console.log('click en title');
// })

// Detener el estado de propagacion
cardDiv.addEventListener('click', e => {
  e.stopPropagation()
  console.log('click en card');
})

infoDiv.addEventListener('click', e => {
  e.stopPropagation()
  console.log('click en info');
})

titleDiv.addEventListener('click', e => {
  e.stopPropagation()
  console.log('click en title');
})



