const producto = 'Monitor 20 pulgadas';

// .replace para reemplazar //
console.log(producto);
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));

// .slice para cortar el lado izquierdo es el que corta inicia y el lado derecho es donde finaliza //
// Donde inicia cortar y donde finaliza cortar // 
console.log(producto.slice(3, 10));
console.log(producto.slice(8));
console.log(producto.slice(2, 1));

// Alternativa a slice substring
console.log(producto.substring(0, 10));
console.log(producto.substring(2, 1));

const usuario = "Jack";
console.log(usuario.substring(0, 1));
console.log(usuario.charAt(0));