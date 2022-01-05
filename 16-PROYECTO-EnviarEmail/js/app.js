// Variables 
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

// Variables para campos
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


// Funciones
eventListeners();
function eventListeners() {
  // Cuando la app arranca
  document.addEventListener('DOMContentLoaded', iniciarApp);

  // Campos del formulario
  email.addEventListener('blur', validarFormulario);
  asunto.addEventListener('blur', validarFormulario);
  mensaje.addEventListener('blur', validarFormulario);

  // Reset the form
  btnReset.addEventListener('click', resetForm);


  // Send Email
  formulario.addEventListener('submit', sendEmail);
}


function iniciarApp() {
  //console.log('Iniciando....')
  btnEnviar.disabled = true;
  btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

// Valida el Formulario
function validarFormulario(e) {
  //console.log(e.target.type)
  //console.log('validando');
  //console.log(e.target.value);
  if (e.target.value.length > 0) {
    // Delete the Errors
    const error = document.querySelector('p.error');
    if (error) {
      error.remove();
    }
    //console.log('Si hay algo');
    e.target.classList.remove('border', 'border-red-500'); // remove etica of code
    e.target.classList.add('border', 'border-green-500');
  } else {
    //console.log('No hay nada');
    e.target.classList.remove('border', 'border-green-500'); // remove etica of code
    e.target.classList.add('border', 'border-red-500');
    mostrarError('Todos los Campos son Obligatorios');
  }

  if (e.target.type === 'email') {
    // var to stock regular expression

    // Cut Variable because it does not have that much scope 
    // const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //console.log('Es email, hay que validarlo diferente');
    //const result = e.target.value.indexOf('@');
    //console.log(resultado);

    if(er.test(e.target.value)) {
      //console.log('Email valido');
      //mostrarError('El email no es valido'); // El email no es valido porque no pudo encontrar el @ utilizando indexof
      // Delete Errors...
      const error = document.querySelector('p.error');
      if (error) {
        error.remove();
      }
    } else {
      //console.log('Email no valido');
      e.target.classList.add('border', 'border-red-500');
      mostrarError('Email no Valido');
    }
  }

  if (er.test(email.value) && asunto.value !== '' && mensaje.value !== '') {
    //console.log('Pasastes la validacion');
    btnEnviar.disabled = false;
    btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
  } 
  // else {
  //   console.log('Hay campos por validar');
  // }

}

function mostrarError (message) {
  //console.log('Error....')
  const mensajeError = document.createElement('p');
  mensajeError.textContent = message;
  mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

  const errores = document.querySelectorAll('.error');
  if (errores.length === 0) {
    formulario.appendChild(mensajeError);
  }
  //formulario.appendChild(mensajeError);
}

// Send the Email
function sendEmail(e) {
  e.preventDefault();

  //console.log('enviando....');

  // Show the spinner
  const spinner = document.querySelector('#spinner');
  spinner.style.display = 'flex';

  //After 3 seconds hide the spinner and show the message
  // Esta funcion se va a ejecutar despues del tiempo que tu definas
  // setInterval se ejecuta cada 3 segundos
  setTimeout ( () => {
    //console.log('this function execute after 3 seconds')
    spinner.style.display = 'none';

    // Message that says it was sent successfully
    const paragraph = document.createElement('p');
    paragraph.textContent = 'The Message was sent successfully';
    paragraph.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

    // Insert the paragraph before of spinner
    formulario.insertBefore(paragraph, spinner);

    // Queremos eliminar la alerta del parrafo green
    // We want delete the alert of paragraph green

    setTimeout(() => {
      paragraph.remove(); // Delete the message of text

      resetForm();
    }, 5000);
  }, 3000 );
}


// Function that reset the form
function resetForm() {
  formulario.reset();
  iniciarApp();
}