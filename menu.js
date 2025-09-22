const botones = document.querySelectorAll(".menu button");
const visor = document.getElementById("visor");
const tarjetaEj6 = document.getElementById("tarjetaEj6");


function mostrarEj6() {
  tarjetaEj6.style.display = "block";
  visor.style.display = "none";
}


mostrarEj6();

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const url = boton.getAttribute("data-url");

    if (url === "ejer6") {
      
      mostrarEj6();
    } else {
      
      visor.src = url;
      visor.style.display = "block";
      tarjetaEj6.style.display = "none";
    }
  });
});