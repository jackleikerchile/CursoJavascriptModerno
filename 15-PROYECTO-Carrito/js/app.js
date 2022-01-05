// // Variables
// const carrito = document.querySelector('#carrito');
// const contenedorCarrito = document.querySelector('#lista-carrito tbody');
// const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
// const listaCursos = document.querySelector('#lista-cursos');
// let articulosCarrito = [];

// cargarEventListeners();
// function cargarEventListeners() {
//   // Cuando agregas un curso presionando "Agregar Carrito"
//   listaCursos.addEventListener('click', agregarCursos)

//   // Elimina cursos del carrito
//   carrito.addEventListener('click', eliminarCurso)

//   // Vaciar el carrito
//   vaciarCarritoBtn.addEventListener('click', () => {
//     //console.log('vaciando carrito...')
//     articulosCarrito = []; // Reseteamos el arreglo
//     limpiarHTML()
//   })
// }




// // FUNCIONES
// function agregarCursos(e) {
//   //console.log(e.target.classList);
//   e.preventDefault();
//   if (e.target.classList.contains('agregar-carrito')) {
//     const cursoSeleccionado = e.target.parentElement.parentElement
//     leerDatosCurso(cursoSeleccionado)
//   }

// }

// //Eliminar un curso del carrito
// function eliminarCurso(e) { 
//   //console.log(e.target.classList);
//   if (e.target.classList.contains('borrar-curso')) {
//     //console.log(e.target.getAttribute('data-id'))
//     const cursoId = e.target.getAttribute('data-id');

//     // Elimina del arreglo de articulosCarrito por el data-id
//     articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

//     console.log(articulosCarrito);
//   }
//   carritoHtml(); // Iterar sobre el carrito y mostrar su HTML
// }

// // Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
// function leerDatosCurso(curso) {
//   console.log(curso);

//   // Crear un objeto con el contenido del curso actual
//   const infoCurso = {
//     imagen: curso.querySelector('img').src,
//     titulo: curso.querySelector('h4').textContent,
//     precio: curso.querySelector('.precio span').textContent,
//     id: curso.querySelector('a').getAttribute('data-id'),
//     cantidad: 1
//   }
//   //console.log(infoCurso);

//   // Revisa si un elemento ya existe en el carrito
//   const existe = articulosCarrito.some(curso => curso.id === infoCurso.id)
//   //console.log(existe);
//   if (existe) {
//     // Actualizamos la cantidad
//     const cursos = articulosCarrito.map(curso => {
//       if (curso.id === infoCurso.id) {
//         curso.cantidad++;
//         return curso; // retorna el objeto actualizado
//       } else {
//         return curso; // retorna los objetos que no son los duplicados
//       }
//     });
//     articulosCarrito = [...cursos];
//   } else {
//     // Agregamos el curso al carrito
//   // Agregar elementos al arreglo de carrito
//   articulosCarrito = [...articulosCarrito, infoCurso];
//   }

//   console.log(articulosCarrito);

//   carritoHtml();
// }

// // Muestra el Carrito de compras en el HTML
// function carritoHtml() {
//   limpiarHTML();


//   articulosCarrito.forEach( curso => {
//     //console.log(curso);
//     // Utilizar destructuring
//     const {imagen, titulo, precio, cantidad, id} = curso;
//     const row = document.createElement('tr');
//     row.innerHTML = `
//       <td>
//         <img src="${imagen}" width="100">
//       </td>
//       <td>
//         ${titulo}
//       </td> 
//       <td>
//       ${precio}
//       </td>
//       <td>
//       ${cantidad}
//       </td>
//       <td>
//         <a href="#" class="borrar-curso" data-id="${id}"> X </a>
//       </td>
//     `
//     // Agrega el Html del carrito en el tbody
//     contenedorCarrito.appendChild(row);
//   })
// }

// function limpiarHTML() {
//   // Forma Lenta
//   //contenedorCarrito.innerHTML = '';

//   while(contenedorCarrito.firstChild) {
//     contenedorCarrito.removeChild(contenedorCarrito.firstChild);
//   }
// }


// ********** PRACTICE THE CODE JAVASCRIPT COURSE SHOPPING CART ************** //
const cart = document.querySelector('#carrito');
const containerCart = document.querySelector('#lista-carrito tbody');
const clearCartBtn = document.querySelector('#vaciar-carrito');
const listCourse = document.querySelector('#lista-cursos');
let articlesCart = [];

// Loading EventListener ..... //
loadEventListener();
function loadEventListener() {
  // When you add a course by pressing "Add to cart" // 
  //Cuando agregas un curso presionando "Agregar al Carrito" //
  listCourse.addEventListener('click', addCourse);

  // Delete courses of cart
  // Elimina cursos del carrito
  cart.addEventListener('click', deleteCourses)

  // limpiar carrito
  // Clear cart
  clearCartBtn.addEventListener('click', () => {
    //console.log('Clear cart');
    articlesCart = []; // Reset the cart
    clearHtml(); // Delete all the Html
  })
}


// Functions
function addCourse(e) {
  e.preventDefault();
  //console.log('pressing on cart');
  //console.log(e.target.classList)
  if (e.target.classList.contains('agregar-carrito')) {
    //console.log('adding at cart');
    //console.log(e.target);
    //console.log(e.target.parentElement.parentElement);
    const courseSelected = e.target.parentElement.parentElement
    readDataCourse(courseSelected);
  }
}

// Elimina los cursos del carrito
// Delete the courses of cart
function deleteCourses(e) {
  //console.log('Delete Courses');
  //console.log(e.target.classList)
  if (e.target.classList.contains('borrar-curso')) {
    //console.log(e.target.getAttribute('data-id'))
    const courseId = e.target.getAttribute('data-id');

    // Elimina del Arreglo de articulosCarrito por el data-id
    // Delete of arr of articles to data-id
    // Delete the course that is selected
    articlesCart = articlesCart.filter( course => course.id !== courseId)

    //console.log(articlesCart);
    cartHtml() // iterar sobre el carrito y mostrar su HTML // Iterate over the cart and display its HTML
  }
}



//Lee el contenido del HTML al que le dimos click y extrae la informacion del curso//
// Read the content of the HTML that we clicked on and extract the information from the course//
function readDataCourse(course) {
  console.log(course);

  // Crear un objeto con el contenido del curso actual
  // Create an object with the current course content
  const infoCourse = {
    image: course.querySelector('img').src,
    title: course.querySelector('h4').textContent,
    price: course.querySelector('.precio span').textContent,
    id: course.querySelector('a').getAttribute('data-id'),
    amount: 1
  }
  //console.log(infoCourse);


  // Revisa si un elemento ya existe en el carrito
  // Check if an item already exists in the cart.

  const exists = articlesCart.some( course => course.id === infoCourse.id);
  //console.log(exists);

  if (exists) {
    // Actualizamos la cantidad
    // We update the quantity
    const courses = articlesCart.map ( course => {
      if (course.id === infoCourse.id) {
        course.amount++;
        return course; // Returns the update object // Retorna el objecto actualizado
      } else {
        return course; // Returns objects that are not duplicates // Retorna los objetos que no son los duplicados
      }
    });
    articlesCart = [...courses];

  } else {
    // Agregamos el curso al carrito
    // We add the course to the cart

  // Agrega elementos al arreglo de carrito
  // Add items to cart arrangement
  articlesCart = [...articlesCart, infoCourse];
  }



  console.log(articlesCart);
  cartHtml();
}

// Muestra el carrito de compras en el HTML
// Show the shopping cart in the HTML
function cartHtml() {

  // Limpiar el HTML
  // Clear the HTML
  clearHtml();


  // Recorre el carrito y genera el HTML
  // Go through the cart and generate the HTML
  articlesCart.forEach(course => {
    //console.log(course);
    // Use Destructuring
    const { image, title, price, amount, id} = course
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${image}" width="100"></td>
      <td>${title}</td>
      <td>${price}</td>
      <td>${amount}</td>
      <td><a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
    
    
    
    
    `;

    // Add the HTML of cart in the tbod //
    // Agrega el HTML del carrito en le tbody //
    containerCart.appendChild(row);
  });
}

// Elimina los cursos del tbody
// Delete tbody courses
function clearHtml() {
  // Forma Lenta
  // Slow way
  // containerCart.innerHTML = '';

  while(containerCart.firstChild)
    containerCart.removeChild(containerCart.firstChild)
}