const CARRITO = 'carrito';

function guardarCarrito(lista) {
    localStorage.setItem(CARRITO, JSON.stringify(lista));
}

function cargarCarrito() {
    return JSON.parse(localStorage.getItem(CARRITO)) || [];
}

function agregarProductos(nombre, precio) {
    let productos = cargarCarrito();
    productos.push({ nombre, precio });
    guardarCarrito(productos);
}

export { agregarProductos, guardarCarrito, cargarCarrito };
