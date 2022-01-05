// for (i=0; i<=10; i++) {
//   if (i === 5) {
//     console.log('CINCO');
//     continue;
//   }
//   console.log(`Numero: ${i}`);
// }


const carrito = [
  {nombre: 'Monitor 20 pulgadas', precio: 500},
  {nombre: 'Televisio', precio: 100},
  {nombre: 'Tablet', precio: 200, descuento: true},
  {nombre: 'Audifonos', precio: 300},
  {nombre: 'Teclado', precio: 400},
  {nombre: 'Celular', precio: 700},
]

for(let i = 0; i < carrito.length; i++) {
  if(carrito[i].descuento) {
    console.log(`El articulo ${carrito[i].nombre} Tiene un descuento`)
    continue;
  }
  console.log(carrito[i].nombre);
}