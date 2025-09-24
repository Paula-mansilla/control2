import { crearHeader } from "./componentes/header/headerComponent.js";
import { crearSeccion1 } from "./componentes/seccion1/seccion1Component.js";
import { crearFormulario } from "./componentes/formulario/formularioComponent.js";
import { cargarCarrito, guardarCarrito } from "./control/miLocalStorange.js";

import { listaProductos } from "./dataBase/productos.js";

function seccion() {
    let seccion = document.createElement('section');

    let lista = cargarCarrito();

    // LocalStorage: inicializar si está vacío
    if (!Array.isArray(lista) || lista.length === 0) {
        lista = listaProductos;       // cargar productos iniciales
        guardarCarrito(lista);
    }

    console.log("Lista de productos:", lista);

    // Header
    seccion.appendChild(crearHeader());

    // Seccion1
    seccion.appendChild(crearSeccion1());

    // Formulario
    seccion.appendChild(crearFormulario());

    return seccion;
    
}


// 🔹 Aquí apuntamos al root
const root = document.querySelector('#root');
root.appendChild(seccion());
