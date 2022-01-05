"use strict"

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true
}

// Los objectos no se pueden Modificar que estan congelados
Object.freeze(producto);

// producto.disponible = false;
// producto.image = 'imagen.jpg';
// delete producto.precio;
console.log(producto);

console.log(Object.isFrozen(producto));