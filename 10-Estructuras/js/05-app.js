// Switch case

const metodoPago = 'efectivo';

switch(metodoPago) {
  case 'efectivo':
    pagar();
    console.log(`Pagastes con ${metodoPago}`);
    break;
  case 'cheque':
    console.log(`Pagastes con ${metodoPago}`);
    break;
  case 'tarjeta':
    console.log(`Pagastes con ${metodoPago}`);
    break;
  default:
  console.log('Aun no has seleccioando el metodo de pago o metodo de pago no soportado');
    break;
}

function pagar() {
  console.log('Pagando.....');
}