import { descarga } from "../../control/descargar.js";
export function crearHeader() {
    let contenedor = document.createElement('header');
    contenedor.className = "header";

    let titulo = document.createElement('h1');
    titulo.className = "titulo";
    titulo.textContent = "Mi Lista de Compras";

    let logoBox = document.createElement('div');
    logoBox.className = "logo-box";

    let div = document.createElement('div'); 
    div.className = "descargarlogo"; 
    div.innerHTML = "⬇️ "; 
    div.style.cursor = "pointer";
    div.addEventListener("click", () => {
    descarga("miContenedor"); 
    });

    logoBox.appendChild(div);

    contenedor.appendChild(titulo);
    contenedor.appendChild(logoBox);

    return contenedor;
}
