// for (i = 0; i <= 10; i++) {
//   console.log(`Numero: ${i}`);
// }


// for (i=1; i<=20; i++) {
//   if (i % 2 == 0) {
//     console.log(`El numero ${i} es PAR`);
//   } else {
//     console.log(`El numero ${i} en Impar`);
//   }
// }


const carrito = [
  {nombre: 'Monitor 20 pulgadas', precio: 500},
  {nombre: 'Televisio', precio: 100},
  {nombre: 'Tablet', precio: 200},
  {nombre: 'Audifonos', precio: 300},
  {nombre: 'Teclado', precio: 400},
  {nombre: 'Celular', precio: 700},
]

console.log(carrito.length);

for (i=0; i<carrito.length; i++) {
  console.log(carrito[i].nombre);
}