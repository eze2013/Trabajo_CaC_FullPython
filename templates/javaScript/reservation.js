    // Obtener referencia al formulario por su ID
    const formulario = document.getElementById('form-reserva');

    formulario.addEventListener('submit', e => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    // obtenemos los datos del formulario ----------------------------
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const mail = document.getElementById('mail').value;
    const telefono = document.getElementById('telefono').value;
    const adultos = document.getElementById('adultos').value;
    const menores = document.getElementById('menores').value;
    const fechaLlegada = document.getElementById('fecha_llegada').value;
    const fechaSalida = document.getElementById('fecha_salida').value;
    const habitacionSeleccionada = document.querySelector('input[name="habitaciones"]:checked');
    const terminosYCondiciones = document.getElementById('terminos_condiciones').checked;

  // validamos los datos del formulario --------------------------------
    
  // Validación del nombre, apellido y mail (no vacíos)
    if (nombre.trim() === "" || apellido.trim() === "" || mail.trim() === "") {
        alert('Tiene que introducir nombre, apellido y mail.');
        console.log('Se verifico el nombre, apellido y mail');
        return;
    }

    // Validación del teléfono (solo números)
    if (!/^\d+$/.test(telefono)) {
        alert('El teléfono debe contener solo números.');
        return;
    }

    // Validación de adultos y menores (no vacíos)
    if (adultos.trim() === "" || menores.trim() === "") {
        alert('Por favor, ingresa la cantidad de adultos y menores.');
        return;
    }

    // Validación de fechas de llegada y salida (no vacías)
    if (fechaLlegada.trim() === "" || fechaSalida.trim() === "") {
        alert('Por favor, seleccione las fechas de llegada y salida.');
        return;
    }

    // Validación de habitación seleccionada
    if (!habitacionSeleccionada) {
        alert('Por favor, selecciona una habitación.');
        return;
    }

    if (!terminosYCondiciones) {
        alert('Tiene que aceptar los términos y condiciones para continuar.');
        return;
    }

    console.log('Se verifico todo');

    alert('Formulario enviado correctamente.');
    formulario.submit(); // Envio el formulario
    formulario.reset(); // Limpia los campos
    });