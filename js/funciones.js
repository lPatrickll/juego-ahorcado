function irAPagina(categoria) {
    window.location.href = categoria + '.html';
}

function seleccionarCategoria(categoria) {
    localStorage.setItem('categoriaSeleccionada', categoria);
    console.log('Categoría seleccionada:', categoria);
}