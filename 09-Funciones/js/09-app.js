const reproductor = {
  reproducir: function(id) {
    console.log(`Reproduciendo cancion con el id ${id}`);
  },
  pausar: function() {
    console.log('pausando....')
  },
  borrar: function(id) {
    console.log(`Borrando cancion... ${id}`)
  },
  crearPlaylist: function(nombre) {
    console.log(`Creando playlist de... ${nombre}`)
  },
  reproducirPlaylist: function(nombre) {
    console.log(`Reproduciendo la playlist ${nombre}`)
  }
}

reproductor.reproducir(30)
reproductor.reproducir(20)
reproductor.reproducir(10)
reproductor.pausar()
reproductor.borrar(30)
reproductor.crearPlaylist('Electronica')
reproductor.crearPlaylist('Merengue de los 90')
reproductor.reproducirPlaylist('Merengue de los 90')
