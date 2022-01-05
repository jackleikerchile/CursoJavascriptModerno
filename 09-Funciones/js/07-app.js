iniciarApp();

function iniciarApp() {
  console.log('Iniciar App...')

  segundaFuncion();
}

function segundaFuncion() {
  console.log('Desde la segunda funcion');

  usuarioAutenticado('Jack');
}

function usuarioAutenticado(usuario) {
  console.log('Autenticado usuario... espere...')
  console.log(`Usuario autenticado exitosamente ${usuario}`)
}