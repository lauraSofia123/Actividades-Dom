const clickBtn = document.getElementById("clickMe");
const removeBtn = document.getElementById("removeEvent");

// Función del evento
function mostrarAlerta() {
  alert("¡Botón clickeado!");
}

// Agregar evento al primer botón
clickBtn.addEventListener("click", mostrarAlerta);

// Eliminar evento al hacer clic en el segundo botón
removeBtn.addEventListener("click", () => {
  clickBtn.removeEventListener("click", mostrarAlerta);
  alert("Evento eliminado. Ahora el primer botón ya no hace nada.");
});