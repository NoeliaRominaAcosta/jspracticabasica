console.log('index.js success');

const qs = (element) => document.querySelector(element)
const qsa= (element) => document.querySelectorAll(element)

const main =qs('.container');
const subtitulo = qs('h2.subtitulo');
const parrafos = qsa('p');
const link = qs('a');
//mensaje
let nombre =prompt('decime tu nombre');
if(nombre){
    
    subtitulo.innerText += nombre
}else{
    subtitulo.innerText += "Invitado"
}
subtitulo.style.textTransform = "uppercase"
link.style.color = "#E5183E";
let respuesta = confirm("¿Quiere agregar un fondo de pantalla?")
if(respuesta){
    qs('body').classList.add('.fondo')
    
}
for (let i = 0; i < parrafos.length; i++) {
  if(i%2 === 0){
    parrafos[i]
  }
    
}




main.style.display = block;
