const producto = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
  disponible: true
}

// Destructuring the value Object && Extraer al valor del objeto
const { nombre, precio, disponible } = producto;

console.log(nombre);


// Destructuring con Array 
const numeros = [10,20,30,40,50];


// Acceder a los elementos de un arreglo
const [one, ...tercero] = numeros;
console.log(one);