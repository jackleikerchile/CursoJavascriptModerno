"use strict"

const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true
}

// Los objectos isfrazee no se pueden Modificar que estan congelados
// el metodo seal te deja modificar una propiedad, pero no te deja anadir nuevas  propiedades ni eliminar
Object.seal(producto);

// producto.disponible = false;
// producto.image = 'imagen.jpg';
// delete producto.precio;
console.log(producto);

console.log(Object.isFrozen(producto));
console.log(Object.isSealed(producto));
