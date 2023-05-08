const imagenCanelones = document.querySelector("#img-canelones");
const titulo = document.querySelector("#Titulo");
const parrafo = document.querySelector("#parrafo");
const enlace = document.querySelector("#enlace");
const cuerpoPag = document.querySelector("body");

imagenCanelones.src="https://media.gettyimages.com/id/154932234/es/foto/canel%C3%B3n.jpg?s=612x612&w=0&k=20&c=iX1sKlgcbMl6yjZdUsf_QOkfh5QXAxwGQDbfXxlEE0U=";
titulo.innerHTML= "Pagina de recetas";
parrafo.innerHTML = "Recetas de canelones";
enlace.innerHTML = "click aqui para abrir la receta de canelones";
enlace.href = "https://recetasdecocina.elmundo.es/2020/04/canelones-caseros-carne-receta-facil.html";
cuerpoPag.style.backgroundColor= "yellow";
cuerpoPag.style.color = "blue";
