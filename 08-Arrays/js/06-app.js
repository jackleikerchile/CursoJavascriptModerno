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


const producto3 = {
  nombre: 'Teclado',
  precio: 50
}

let resultado;

resultado = [...carrito, producto];

resultado = [...resultado, producto2];

resultado = [producto3, ...resultado];


console.table(resultado);