const carrito = [
  { nombre: 'Monitor 27 Pulgadas', precio: 500 },
  { nombre: 'Televisión', precio: 100 },
  { nombre: 'Tablet', precio: 200 },
  { nombre: 'Audifonos', precio: 300 },
  { nombre: 'Teclado', precio: 400 },
  { nombre: 'Celular', precio: 700 },
]


// con un forEach
let resultado = '';

carrito.forEach( (product, index ) => {
  if (product.nombre === 'Tablet') {
    resultado = carrito[index]
  }
})

console.log(resultado)

// con .find
const resultado2 = carrito.find(product => product.nombre === 'Tablet' )
console.log(resultado2)

// Va a retornar el primer valor que encuentre
const resultado3 = carrito.find(product => product.precio === 100 )
console.log(resultado3);