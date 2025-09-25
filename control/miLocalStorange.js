const KEY_STORAGE = "miCarrito";

// Guardar lista completa
export function setLista(productos) {
  localStorage.setItem(KEY_STORAGE, JSON.stringify(productos));
}

// Obtener lista completa
export function getLista() {
  const data = localStorage.getItem(KEY_STORAGE);
  return data ? JSON.parse(data) : [];
}

// Añadir un solo producto
export function addProducto(nombre, precio) {
  const lista = getLista();
  lista.push({ nombre, precio });
  setLista(lista);
}
