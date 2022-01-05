const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true
}

// Reescribir una propiedad de un Objecto
producto.disponible = false;

delete producto.precio;

console.log(producto);