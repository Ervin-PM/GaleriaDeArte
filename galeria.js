function mostrarModal() {
    event.preventDefault();
    const img = event.target;
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    const texto = document.getElementById('textoimg');
    texto.textContent = img.alt;

    const imgModal = document.getElementById('imgModal');
    imgModal.src = img.src;
    imgModal.alt = img.alt;
    myModal.show();
}

function cerrarModal() {
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.hide();
}

function eliminarImagen() {
    const imgModal = document.getElementById('imgModal');
    const artworks = document.querySelectorAll('.content-all img');
    artworks.forEach(artwork => {
        if (artwork.src === imgModal.src) {
            artwork.remove();
        }
    });
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.hide();
}

function asignarComportamiento(event) {
    const artworks = document.querySelectorAll('.content-all img');
    artworks.forEach(artwork => {
        artwork.addEventListener('click', mostrarModal);
    });
    const closeButton = document.querySelector('.closeBtn');
    closeButton.addEventListener('click', cerrarModal);

    const deleteButton = document.getElementById('deleteBtn');
    deleteButton.addEventListener('click', eliminarImagen);
}

document.addEventListener("DOMContentLoaded", asignarComportamiento);