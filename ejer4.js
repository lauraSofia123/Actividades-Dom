const btnReemplazar = document.getElementById('reemplazarBtn');
const contenedor = document.getElementById('contenedor');
const parrafoOriginal = document.getElementById('parrafoOriginal');

btnReemplazar.addEventListener('click', () => {
  // Crear nuevo párrafo
  const nuevoParrafo = document.createElement('p');
  nuevoParrafo.textContent = "Ahora soy el nuevo párrafo que reemplazó al original";

  // Reemplazar el original por el nuevo
  contenedor.replaceChild(nuevoParrafo, parrafoOriginal);
});