const producto = 'Monitor 20 pulgadas';

// .repeat te va a permitir repetir una cadena de texto...

const texto = 'en Promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);



// Split, dividir un string

const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));

const hobbies = "Leer, Caminar, escuchar musica, escribir, aprender a programar";
console.log(hobbies.split(","));

const tweet = "Aprendiendo Javascript #Moderno";
console.log(tweet.split("#"));
