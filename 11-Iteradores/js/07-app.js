const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar Javascript'];


const carrito = [
  {nombre: 'Monitor 20 pulgadas', precio: 500},
  {nombre: 'Televisio', precio: 100},
  {nombre: 'Tablet', precio: 200},
  {nombre: 'Audifonos', precio: 300},
  {nombre: 'Teclado', precio: 400},
  {nombre: 'Celular', precio: 700},
]

for(let pendiente of pendientes) { // for of itera sobre arreglo
  console.log(pendiente);
}

for (producto of carrito) {
  console.log(producto.nombre);
}