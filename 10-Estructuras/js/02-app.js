const puntaje = 1000;
const puntaje2 = "1000";


console.log(typeof puntaje)
console.log(typeof puntaje2)
// if (puntaje != 1000) { // != diferente == igual a
//   console.log('si es diferente.....');
// }

if (puntaje === '1000') { // != diferente == igual a
  console.log('si es igual.....');
} else {
  console.log('no es igual');
}

// == Operador que no es estricto
// === Operador Estricto