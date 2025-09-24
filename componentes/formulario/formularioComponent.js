import { cargarCarrito, guardarCarrito } from "../../control/miLocalStorange.js";

export function crearFormulario() {
    let form = document.createElement('form');
    form.className = "formulario";

    let campoProducto = document.createElement('input');
    campoProducto.className = "campo-producto";
    campoProducto.type = "text";
    campoProducto.placeholder = "Escribe un producto";
    form.appendChild(campoProducto);

    let campoPrecio = document.createElement('input');
    campoPrecio.className = "campo-precio";
    campoPrecio.type = "number";
    campoPrecio.placeholder = "Q 0.00";
    form.appendChild(campoPrecio);

    let btnAgregar = document.createElement('button');
    btnAgregar.className = "btn-agregar";
    btnAgregar.textContent = "Agregar";
    form.appendChild(btnAgregar);

    let lista = document.createElement("ul");
    lista.className = "lista-productos";
    form.appendChild(lista);

    //boton agregar
    btnAgregar.addEventListener('click', (e) => {
        e.preventDefault();

    let nombre = campoProducto.value.trim();
    let precio = parseFloat(campoPrecio.value);
        if (nombre && !isNaN(precio) && precio > 0) {
            
         let item = document.createElement('li');
        item.className = "item-producto";
        item.textContent = `${nombre} — Q${precio.toFixed(2)}`;


  
     // Botón eliminar
    let btnEliminar = document.createElement("button");
    btnEliminar.className = "btn-eliminar";
    btnEliminar.innerText = "❌";
    btnEliminar.style.marginLeft = "10px";
    item.appendChild(btnEliminar);

    lista.appendChild(item);

    // Guardar en localStorage
    let carrito = cargarCarrito();
    carrito.push({ nombre, precio });
    guardarCarrito(carrito);

    // Limpiar inputs
    campoProducto.value = "";
    campoPrecio.value = "";

    // Evento eliminar
    btnEliminar.addEventListener("click", () => {
      lista.removeChild(item);

    let carritoActualizado = cargarCarrito().filter(
    p => !(p.nombre === nombre && p.precio === precio)
    );
    guardarCarrito(carritoActualizado);
     });
  }
    
});

    return form;
}
