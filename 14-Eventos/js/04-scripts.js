const form = document.querySelector('#formulario');

form.addEventListener('submit', ShowEvent);
  // event.preventDefault();

  // // Que metodo tiene Post
  // // console.log(event.target.method)

  // // Va ir hacia la url buscador
  // console.log(event.target.action)


function ShowEvent(event) {
  event.preventDefault();
  console.log('consultar una api')
  console.log(event.target.action)
  
}