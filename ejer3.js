const crearBtn = document.getElementById('crearParrafoBtn');
const eliminarBtn = document.getElementById('eliminarParrafoBtn');

// Contenedor donde se agregarán los párrafos
const contenedor = document.getElementById('contenedorParrafos');

// Crear párrafo dinámicamente
crearBtn.addEventListener('click', () => {
  const nuevoP = document.createElement('p'); // crear <p>
  nuevoP.textContent = "Este es un párrafo creado dinámicamente";
  contenedor.appendChild(nuevoP); // agregar al contenedor
});

// Eliminar el primer párrafo del contenedor
eliminarBtn.addEventListener('click', () => {
  const primerP = contenedor.querySelector('p');
  if (primerP) {
    contenedor.removeChild(primerP); // eliminar primer párrafo
  } else {
    alert("No hay párrafos para eliminar.");
  }
});