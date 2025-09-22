// Cambiar el href de un enlace usando getElementsByTagName
const enlaces = document.getElementsByTagName("a");
if (enlaces.length > 0) {
  enlaces[0].href = "https://www.google.com/?hl=es&zx=1758512946628&no_sw_cr=1";
  enlaces[0].textContent = "Ir a Google";
}

// Cambiar contenido de la clase titulo
const titulo = document.querySelector(".titulo");
titulo.textContent = "Título Modificado";

// Cambiar color de fondo del body
document.body.style.background = "#D6D6D6FF";