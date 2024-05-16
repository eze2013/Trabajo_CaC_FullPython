// referenciar al formulario
const formulario = document.getElementById('form-registro');

// Agregar un event listener para el evento 'submit' del formulario
formulario.addEventListener('submit', e => {
    // Evitar que el formulario se envíe automáticamente
    e.preventDefault();

    // obtenemos los datos del formulario ----------------------------
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;
    const telefono = document.getElementById('telefono').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    const pais = document.getElementById('pais').value;
    const genero = document.querySelector('input[name="genero"]:checked');
    const terminosYCondiciones = document.getElementById('terminos_condiciones').checked;

    // validamos los datos del formulario --------------------------------

    // Validar que se ingrese nombre y apellido
    if (nombre.trim() === "" || apellido.trim() === "") {
        alert('Por favor ingrese nombre y apellido.');
        return;
    }

    // Validar que el DNI solo contenga números
    if (!/^\d+$/.test(dni)) {
        alert('El DNI debe contener solo números.');
        return;
    }

    // Validación del teléfono (solo números)
    if (!/^\d+$/.test(telefono)) {
        alert('El teléfono debe contener solo números.');
        return;
    }

    // Validar que se haya seleccionado una fecha de nacimiento
    if (!fechaNacimiento.trim() === "") {
        alert('Por favor seleccione una fecha de nacimiento.');
        return;
    }

    // Validar que se haya seleccionado un país
    if (pais.trim() === "") {
        alert('Por favor seleccione un país.');
        return;
    }

    // Validar que se haya seleccionado un género
    if (!genero) {
        alert('Por favor seleccione un género.');
        return;
    }

    // Validar que se haya aceptado los términos y condiciones
    if (!terminosYCondiciones) {
        alert('Tiene que aceptar los términos y condiciones para continuar.');
        return;
    }

    console.log('Se verifico todo');

    alert('Formulario enviado correctamente.');
    formulario.submit(); // Envio el formulario
    formulario.reset(); // Limpia los campos
    });
