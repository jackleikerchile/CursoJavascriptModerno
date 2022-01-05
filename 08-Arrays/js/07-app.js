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

const producto4 = {
  nombre: 'Mouse',
  precio: 60
}

// .push agregar al final de un arreglo

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);


const producto3 = {
  nombre: 'Teclado',
  precio: 50
}



// .unshift agregar al inicio de un arreglo
carrito.unshift(producto3);


// // Eliminar ultimo elemento de un arreglo...
// carrito.pop();
// console.log(carrito);

// // Eliminar al inicio del arreglo...
// carrito.shift()
// console.log(carrito);


// Eliminar un valor de una lista con los parametros de splice
carrito.splice(3,1);
console.log(carrito);