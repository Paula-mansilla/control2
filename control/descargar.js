export function descarga(idContenedor) {
  const elemento = document.getElementById(idContenedor) || document.body;

  window.html2canvas(elemento).then(canvas => {
    const enlace = document.createElement("a");
    enlace.href = canvas.toDataURL("image/png");
    enlace.download = "Lista_compras.png";
    enlace.click();
  });
}
