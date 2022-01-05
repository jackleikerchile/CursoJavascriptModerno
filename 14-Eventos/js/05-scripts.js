window.addEventListener('scroll', () => {
  //console.log('scrolly');

  // const scrollPX = window.scrollY;
  // console.log(scrollPX);

  // En el bottom te dice a que distancia de pixel se encuentra el elemnto , height la altura del elemnto, weight el ancho de ese elemento, y las cordendas right y top 
  const premium = document.querySelector('.premium');
  const location = premium.getBoundingClientRect();

  console.log(location);

  if (location.top < 100) {
    console.log('El elemento esta visible');
  } else {
    console.log('Aun no, da mas scroll');
  }
})