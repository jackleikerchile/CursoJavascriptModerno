const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true
}

// Destructuring the value Object && Extraer al valor del objeto
const { nombre, precio, disponible } = producto;
console.log(nombre);
console.log(precio);
console.log(disponible);