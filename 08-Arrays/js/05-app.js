// const meses = ['Enero', 'Febrero', 'Marzo'];
// // Agregar al final del arreglo
// meses.push('Abril');
// console.table(meses);





// Ejemplo Carrito de Compra
const carrito = [];

// Definir un Producto 
const producto = {
  nombre: 'Monitor 32 pulgadas',
  precio: 400
}

const producto2 = {
  nombre: 'Celular',
  precio: 400
}

// .push agregar al final de un arreglo

carrito.push(producto);
carrito.push(producto2);



const producto3 = {
  nombre: 'Teclado',
  precio: 50
}

// .unshift agregar al inicio de un arreglo
carrito.unshift(producto3);

console.log(carrito);
