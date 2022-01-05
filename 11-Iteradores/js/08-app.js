// const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];

// // Mientras que for in itera sobre objeto indice 0,1,2,3.
// for(let pendiente in pendientes) {
//   console.log(pendiente);
// }


const automovil = {
  modelo: 'Camaro',
  year: 1960,
  motor: '6.0'
}

// for ( let propiedad in automovil) {
//   console.log(`${automovil[propiedad]}`);
// }

for ( let [llave, valor] of Object.entries(automovil)) {
  console.log(valor);
  console.log(llave);
}