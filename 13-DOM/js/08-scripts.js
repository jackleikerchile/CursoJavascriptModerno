// TRAVERSING DE DOM IR NAVEGANDO POR CADA ELEMENTO


const navegacion = document.querySelector('.navegacion')

 console.log(navegacion);
 console.log(navegacion.firstElementChild);
 console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); // Los espacios en blancos son considerados elementos
// console.log(navegacion.children);

// console.log(navegacion.children[1].nodeName);
// console.log(navegacion.children[2].nodeType);

// const card = document.querySelector('.card');

// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the dom'

// card.children[0].src = 'img/hacer2.jpg'
// console.log(card.children[0])

// Traversing the Hijo al padre
//console.log(card.parentNode);

// RECOMIENDA UTILIZAR parentElement
//console.log(card.parentElement.parentElement)

// console.log(card);
// console.log(card.nextElementSibling);
// console.log(card.nextElementSibling.nextElementSibling);

// const ultimoCard = document.querySelector('.card:nth-child(4)');

// // se devuelve al elemento de antes.
// console.log(ultimoCard.previousElementSibling)