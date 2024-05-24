// comenzamos conectando con nuestro formulario

var formulario = document.getElementsByName('formulario')[0]; // conecxion a nuestro formulario
    

function validarDatos(){
    if (formulario.nombre.value === "" || formulario.apellido.value === "" || formulario.email.value === ""|| formulario.pais.value === "" || formulario.provincia.value === ""){
        alert("Complete los datos requeridos por favor");
    }
}

function validarFechas(){
    if(formulario.fechaIngreso.value === "" || formulario.fechaEgreso.value === ""){
        alert("Por favor seleccionar una fecha de ingreso y egreso");
    }
}

function validarTelefono(){
    if(formulario.telefono.value === ""){
        alert("Ingresa un telefono de contacto");
    }
}

function validarPersonas(){
    if(formulario.adultos.value === "" || formulario.niños.value === ""){
        alert("Completa la cantidad de adultos y niños a hospedar");
    }
}

function validarHotel(){
    if(formulario.habitacion.value === "" || formulario.noches.value === ""){
        alert("Completa la habitacion y noches a ospedarse");
    }
}

function validarMensaje(){
    if(formulario.comentario.value === ""){
        alert("No olvides escribir tu consulta")
        }else{
            alert("SU CONSULTA FUE EIVIADA CORRECTAMENTE,GRACIAS!") // en caso de que este todo bien agradecemos la consulta
        }
}

//las funciones varian para que los mensajes del alert sean mas personalizados a el dato que se pide

function validar(){
    validarDatos();
    validarFechas();
    validarTelefono();
    validarPersonas();
    validarHotel();
    validarMensaje();
    
};

formulario.addEventListener("submit",validar);


