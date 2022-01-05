const enlace = document.createElement('a');

// Agregando el texto
enlace.textContent = 'New enlace';

// anadiendo href
enlace.href = '/nuevo-enlace';
console.log(enlace);

enlace.target = "_blank";
enlace.setAttribute('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase')
// enlace.onclick = myFunction;

// Para mostrarlo en el DOM
// Seleccionar la navegacion
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace);
//console.log(navegacion.children);
// Insertarlo antes de un elementooooo....
navegacion.insertBefore(enlace, navegacion.children[1])

// function myFunction() {
//   alert('Diste click');  
// }


// CREAR UN CARD
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');
console.log(parrafo1);

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo')
console.log(parrafo2);

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');
console.log(parrafo3);

// CREAR DIV CON LA CLASE DE INFO
const info = document.createElement('div')
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)
console.log(info);

// Crear la imagen
const image = document.createElement('img');
image.src = 'img/hacer2.jpg';
image.alt = "Texto Alternativo";
console.log(image);

// Crear la Card
const card = document.createElement('div');
card.classList.add('card')

// ASIGNAR LA IMAGEN
card.appendChild(image);
// ASIGNAR LA INFO
card.appendChild(info);

console.log(card);

// INSERTAR EN EL HTML
const container = document.querySelector('.hacer .contenedor-cards');
// container.appendChild(card);
container.insertBefore(card, container.children[0]);


