console.log('moviesAdd success');

const h1 = document.querySelector('h1');
const section = document.querySelector('section');
const article = document.querySelector('article');



/* Agregar a la etiqueta <h1> el mensaje: “AGREGAR PELÍCULAS”.
● Agregar a la etiqueta <h1> la clase: “titulo”.
● Agregar al artículo la clase: “fondoTransparente”.
● Agregar a la sección la clase: “fondoCRUD”.*/

article.classList.add("fondoTransparente")
section.classList.add("fondoCRUD")
h1.classList.add("titulo")
h1.innerHTML = "AGREGAR PELICULAS"