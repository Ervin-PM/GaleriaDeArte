function mostrarSeccion(id) {
    // Ocultar todas las secciones
    var secciones = document.querySelectorAll('main section');
    secciones.forEach(function(seccion) {
        seccion.style.display = 'none';
    });

    // Mostrar la sección seleccionada
    var seccionSeleccionada = document.getElementById(id);
    seccionSeleccionada.style.display = 'block';
}

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;

    var regexTelefono = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    var errorNombre = document.getElementById('errorNombre');
    var errorEmail = document.getElementById('errorEmail');
    var errorTelefono = document.getElementById('errorTelefono');

    errorNombre.innerHTML = '';
    errorEmail.innerHTML = '';
    errorTelefono.innerHTML = '';

    var valido = true;

    if (nombre === '') {
        errorNombre.innerHTML = 'Por favor, introduce tu nombre';
        valido = false;
    }

    if (email === '') {
        errorEmail.innerHTML = 'Por favor, introduce tu correo electrónico';
        valido = false;
    } else if (!emailValido(email)) {
        errorEmail.innerHTML = 'Por favor, introduce un correo electrónico válido';
        valido = false;
    }

    if (telefono === '') {
        errorTelefono.innerHTML = 'Por favor, introduce tu número de teléfono';
        valido = false;
    } else if (!regexTelefono.test(telefono)) {
        errorTelefono.innerHTML = 'Por favor, introduce un número de teléfono válido (Formato: 123-456-7890)';
        valido = false;
    }

    if (valido) {
        document.getElementById('formularioContacto').reset();
        document.getElementById('mensajeExito').style.display = 'block';
    }

    return valido;
}

function emailValido(email) {
    // Expresión regular para validar el formato del correo electrónico
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email);
}