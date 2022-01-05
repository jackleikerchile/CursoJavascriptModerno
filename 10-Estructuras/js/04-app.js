// Operador Mayor que y Menor que

const dinero = 100;
const totalApagar = 300;
const cheque = true;
const tarjeta = false;

if (dinero >= totalApagar) {
  console.log('Si podemos pagar')
} else if (cheque) {
  console.log('Si tengo un cheque')
} else if (tarjeta) {
  console.log('Si puedo pagar porque tengo la tarjeta')
} else {
  console.log('Fondos insuficientes')
}