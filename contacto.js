function revisarYEnviarFormulario(event) {
    event.preventDefault();
    const form = event.target;
    const nombre = form.nombre.value;
    const email = form.email.value;
    const mensaje = form.mensajes.value;
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, complete todos los campos");
        return;
    }
    const selectForm = form.solicitud
    if (mensaje.includes('compra')) {
        selectForm.value='compra';
    } else if (mensaje.includes('venta')) {
        selectForm.value='venta';
    } else {
        selectForm.value='consulta';
    }
    form.submit();
    form.reset();
    alert("Gracias por contactarnos. En breve nos pondremos en contacto con" +
        " usted.");
}

function asignarComportamiento(event) {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', revisarYEnviarFormulario);
}

document.addEventListener("DOMContentLoaded", asignarComportamiento);