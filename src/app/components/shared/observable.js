 image1 = document.getElementById('foto1')
cargarImagen=()=>{
    console.log("50%")
  }
  
   observador = new IntersectionObserver(this.cargarImagen, {
    root:null,
    rootMargin: '100px 0px',
    threshold: 0.5
  } );
  
  observador.observer(image1);

