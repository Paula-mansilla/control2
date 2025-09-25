export function crearSeccionPrincipal() {
  const seccion = document.createElement("section");
  seccion.className = "seccion-principal";
  seccion.id = "miContenedor"; // importante para la descarga

  // Mostrar total
  const total = document.createElement("h2");
  total.className = "total-texto";
  total.textContent = "Q 0.00";

  // Lista de productos
  const listaProductos = document.createElement("ul");
  listaProductos.className = "productos-lista";

  seccion.appendChild(total);
  seccion.appendChild(listaProductos);

  return seccion;
}
