import data from "../datos/fotos";
const galeria = document.getElementById('galeria');

const cargarImagen = (id, nombre, ruta, descripcion) => {
    galeria.querySelector('.galeria__imagen').src = ruta;
    galeria.querySelector('.galeria__titulo').innerText = nombre;
    galeria.querySelector('.galeria__descripcion-imagen-activa').innerText = descripcion;
    galeria.querySelector('.galeria__imagen').dataset.idImagen = id;

    const categoriaActual = galeria.dataset.categoria;
    const fotos = data.fotos[categoriaActual];

    let indexImagenActual;
    fotos.forEach((foto, index) => {
        if(foto.id === id){
            indexImagenActual = index;
        }
    });
    
    //Marcar la imagen como activa
    if(galeria.querySelectorAll('.galeria__carousel-slide').length >0){
        //Clase activa
        galeria.querySelector('.galeria__carousel-slide--active').classsList.remove('galeria__carousel-slide--active');


        galeria.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
    }

    
    

}

export {cargarImagen};