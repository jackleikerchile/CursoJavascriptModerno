const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]


// every si cumple la condicion todos los elementos son true si no son false
// El AND
const resultado = carrito.every(product => product.precio < 1000)
console.log(resultado);


// El OR
const resultado2 = carrito.some(product => product.precio < 500)
console.log(resultado2);