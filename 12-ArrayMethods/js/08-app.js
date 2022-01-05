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

// spread operator con arreglo de indices
const meses2 = [...meses, 'Agosto']
console.log(meses2)

// Asignando un objeto al arreglo
const product = { nombre: 'Disco Duro', precio: 300};

const carrito2 = [...carrito, product]
console.log(carrito2);
