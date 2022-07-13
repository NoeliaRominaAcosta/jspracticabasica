console.log('moviesList success');

const body = document.querySelector('body');
const titulo = document.querySelector('.moviesListTitulo');

let respuesta = confirm("¿Quiere modo oscuro?")
if(respuesta){
    body.style.backgroundColor = "#7f7f7f"
    body.classList.add('fondoMoviesList')
}
titulo.innerHTML = "listado de peliculas";
titulo.style.color = "white";
titulo.style.backgroundColor = "teal";
titulo.style.padding = "20px";
