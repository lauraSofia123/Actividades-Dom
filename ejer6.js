const inputTarea = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

// Función para crear tarea
function agregarTarea() {
  const texto = inputTarea.value.trim();
  if (texto === "") {
    alert("Escribe una tarea antes de agregar.");
    return;
  }

  // Crear contenedor de tarea
  const tareaDiv = document.createElement("div");
  tareaDiv.classList.add("tarea");

  // Ícono check
  const check = document.createElement("span");
  check.textContent = "✔";
  check.classList.add("check");
  check.addEventListener("click", () => {
    check.classList.toggle("realizada");
  });

  // Texto de tarea
  const tareaTexto = document.createElement("span");
  tareaTexto.textContent = texto;

  // Ícono eliminar
  const eliminar = document.createElement("span");
  eliminar.textContent = "✖";
  eliminar.classList.add("eliminar");
  eliminar.addEventListener("click", () => {
    const confirmar = confirm("¿Seguro que deseas eliminar esta tarea?");
    if (confirmar) {
      listaTareas.removeChild(tareaDiv);
    }
  });

  // Agregar todo al div de tarea
  tareaDiv.appendChild(check);
  tareaDiv.appendChild(tareaTexto);
  tareaDiv.appendChild(eliminar);

  // Agregar a la lista
  listaTareas.appendChild(tareaDiv);

  // Limpiar input
  inputTarea.value = "";
}

// Evento de clic en botón
btnAgregar.addEventListener("click", agregarTarea);

// Evento Enter en input
inputTarea.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});