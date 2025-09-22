// Seleccionar div con id=info y mostrar en consola
const info = document.getElementById("info");
console.log("Contenido de #info:", info.textContent);

// Seleccionar el primer elemento con clase detalle y modificar texto
const detalle = document.querySelector(".detalle");
detalle.textContent = "Este es un detalle modificado";

// Seleccionar todos los párrafos y cambiarles el fondo a lightblue
const parrafos = document.querySelectorAll("p");
parrafos.forEach(p => p.style.background = "lightblue");