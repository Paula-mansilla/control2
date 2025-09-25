import { getLista, setLista } from "../../control/miLocalStorange.js";

export function crearFormularioCompras(seccion) {
  const form = document.createElement("form");
  form.className = "mi-formulario";

  // Campo producto
  const campoNombre = document.createElement("input");
  campoNombre.type = "text";
  campoNombre.placeholder = "Nombre del producto";
  campoNombre.className = "input-nombre";
  form.appendChild(campoNombre);

  // Campo precio
  const campoPrecio = document.createElement("input");
  campoPrecio.type = "number";
  campoPrecio.placeholder = "Precio Q.00";
  campoPrecio.className = "input-precio";
  form.appendChild(campoPrecio);

  // Botón agregar
  const btnAgregar = document.createElement("button");
  btnAgregar.type = "submit";
  btnAgregar.textContent = "Agregar";
  btnAgregar.className = "btn-agregar";
  form.appendChild(btnAgregar);

  // Referencias a la sección principal
  const totalElem = seccion.querySelector(".total-texto");
  const listaElem = seccion.querySelector(".productos-lista");

  // 🔄 Actualizar total
  function actualizarTotal() {
    const productos = getLista() || [];
    const suma = productos.reduce((acc, p) => acc + p.precio, 0);
    totalElem.textContent = `Q ${suma.toFixed(2)}`;
  }

  // 📝 Mostrar los productos guardados
  (getLista() || []).forEach(prod => {
    agregarItem(prod.nombre, prod.precio);
  });
  actualizarTotal();

  // ⚡ Función para crear un <li>
  function agregarItem(nombre, precio) {
    const item = document.createElement("li");
    item.className = "producto-item";
    item.innerHTML = `
      ${nombre} - Q ${precio.toFixed(2)} 
      <span class="btn-eliminar">❌</span>
    `;

    item.querySelector(".btn-eliminar").addEventListener("click", () => {
      item.remove();
      let productos = getLista();
      productos = productos.filter(p => !(p.nombre === nombre && p.precio === precio));
      setLista(productos);
      actualizarTotal();
    });

    listaElem.appendChild(item);
  }

  // Evento submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = campoNombre.value.trim();
    const precio = parseFloat(campoPrecio.value);

    if (nombre && !isNaN(precio) && precio > 0) {
      agregarItem(nombre, precio);

      const productos = getLista() || [];
      productos.push({ nombre, precio });
      setLista(productos);

      actualizarTotal();
      campoNombre.value = "";
      campoPrecio.value = "";
    } else {
      alert("Debes ingresar un producto válido con precio.");
    }
  });

  return form;
}