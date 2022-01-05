const carrito = [
  {nombre: 'Monitor 20 pulgadas', precio: 500},
  {nombre: 'Television', precio: 100},
  {nombre: 'Tablet', precio: 200},
  {nombre: 'Audifonos', precio: 300},
  {nombre: 'Teclado', precio: 400},
  {nombre: 'Celular', precio: 700},
]


const nuevoArray1 = carrito.forEach(function (producto) {
  return`${producto.nombre} - Precio: ${producto.precio}`;
})

// La funcion map crea un nuevo arreglo...
const nuevoArray2 = carrito.map(function (producto) {
  return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArray1);
console.log(nuevoArray2);