const reproductor = {
  // como tiene un solo parametro se le quita los parentesis
  cancion: '',
  reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
  pausar: () => console.log('pausando....'),
  borrar: id => console.log(`Borrando cancion... ${id}`),
  crearPlaylist: nombre => console.log(`Creando playlist de... ${nombre}`),
  reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),


    // Set es Agregar valores
  set nuevaCancion(cancion) {
    this.cancion = cancion;
    console.log(`Anadiendo ${cancion}`);
  },
  // Get es una forma de obtener esos valores
  get obtenerCancion() {
    console.log(`${this.cancion}`);
  } 
}

reproductor.nuevaCancion = 'Enter Bachata';
reproductor.obtenerCancion;

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.reproducir(10)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlaylist('Electronica')
reproductor.crearPlaylist('Merengue de los 90')
reproductor.reproducirPlaylist('Merengue de los 90')