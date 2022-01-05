const carrito = [
  {nombre: 'Monitor 20 pulgadas', precio: 500},
  {nombre: 'Televisio', precio: 100},
  {nombre: 'Tablet', precio: 200},
  {nombre: 'Audifonos', precio: 300},
  {nombre: 'Teclado', precio: 400},
  {nombre: 'Celular', precio: 700},
]





for (i=0; i<carrito.length; i++) {
  console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

// carrito es el plural del array y producto singular estamos iterando sobre producto
carrito.forEach(function (producto) {
  console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})