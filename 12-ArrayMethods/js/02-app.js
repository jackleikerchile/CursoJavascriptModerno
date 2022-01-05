// array de indice
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

// array de objeto
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach( (mes, i) => {
  if(mes === 'Abril') {
    console.log(`Encontrado el mes de ${mes} en el indice ${i} `);
  }
})

// Encontrar el indice de Abril
// Encntrar la posicion en un array findIndex
const indice = meses.findIndex( mes => mes === 'Abril')
console.log(indice);

const indexProduct = carrito.findIndex( product => product.precio < 400 );
console.log(indexProduct);