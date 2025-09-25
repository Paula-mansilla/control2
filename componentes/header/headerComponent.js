import { descarga } from "../../control/descargar.js";

export function crearHeader() {
  const header = document.createElement("header");
  header.className = "mi-header";

  const titulo = document.createElement("h2");
  titulo.textContent = "Mi Lista de Compras";
  titulo.className = "mi-titulo";

  const botonDescarga = document.createElement("span");
  botonDescarga.textContent = "⬇️";
  botonDescarga.className = "mi-boton-descarga";
  botonDescarga.style.cursor = "pointer";

  botonDescarga.addEventListener("click", () => {
    descarga("miContenedor");
  });

  header.appendChild(titulo);
  header.appendChild(botonDescarga);

  return header;
}
