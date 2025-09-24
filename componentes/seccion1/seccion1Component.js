export function crearSeccion1() {
    let seccion = document.createElement('section');
    seccion.className = "seccion-1";
    seccion1.id = "miContenedor";

    let monto = document.createElement('h2');
    monto.className = "monto-total";
    monto.textContent = "Q 0.00";

    seccion.appendChild(monto);

    return seccion;
}