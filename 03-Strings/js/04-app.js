const producto = '                      Monitor 20 pulgadas                           ';

console.log(producto);
console.log(producto.length);

// Eliminar el espaciado del inicio //
console.log(producto.trimStart() );
// Eliminar el espaciado del final //
console.log(producto.trimEnd() );

// Esta Funcion es Nueva // 
console.log(producto.trimStart().trimEnd());

console.log(producto.trim());