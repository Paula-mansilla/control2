import { crearHeader } from "./componentes/header/headerComponent.js";
import { crearSeccionPrincipal } from "./componentes/seccion1/seccion1Component.js";
import { crearFormularioCompras } from "./componentes/formulario/formularioComponent.js";
import { getLista, setLista } from "./control/miLocalStorange.js";

function crearApp() {
  const contenedor = document.createElement("section");
  contenedor.className = "todo";

  // Crear seccion principal
  const seccion = crearSeccionPrincipal();
  contenedor.appendChild(crearHeader());
  contenedor.appendChild(seccion);

  // Crear formulario y conectarlo con la sección
  const formulario = crearFormularioCompras(seccion);
  contenedor.appendChild(formulario);

  return contenedor;
}

// 🔹 Apuntar al root
const root = document.querySelector("#root");
root.appendChild(crearApp());
