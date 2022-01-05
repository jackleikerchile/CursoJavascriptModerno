// Fizz Buzz - 100 Numeros

// Si un numero multiplo de 3... 3 6 9 12... Fizz
// Si un numero multiplo de 5... 5 10 15 20... Buzz
// Si un numero multiplo de 3... y de 5...  15 30 45... FizzBuzz

for(i=0; i<=100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} FizzBuzz!!!`);
  } else if(i % 3 === 0) {
    console.log(`${i} Fizz`);
  } else if (i % 5 === 0) {
    console.log(`${i} Buzz`);
  }
  console.log(i);
}