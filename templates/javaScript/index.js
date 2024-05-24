// Obtener la modal
var modal = document.getElementById('modalServicios');

// Obtener el enlace que abre la modal
var btn_3 = document.getElementsByClassName('btn_3')[0];

// Obtener el elemento <span> que cierra la modal
var span = document.getElementsByClassName('close')[0];

// Cuando el usuario hace clic en el enlace, abrir la modal
btn_3.onclick = function() {
  modal.style.display = 'block';
}

// Cuando el usuario hace clic en <span> (x), cerrar la modal
span.onclick = function() {
  modal.style.display = 'none';
}

// Cuando el usuario hace clic fuera de la modal, cerrarla
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

//Validacion de la Consulta

const formConsult = document.getElementById("MiFormulario")
const inputNombre = document.getElementById("nombre")
const inputEmail = document.getElementById("email")
const inputServicio = document.getElementById("servicio")
const inputTextarea = document.getElementById("mensaje")
const parrafo = document.getElementById("error")

formConsult.addEventListener("submit", e=>{
  e.preventDefault();
  let warning = "";
  let valor = false;
  parrafo.innerHTML = "";
  let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


  if (inputNombre.value.lemght<3){
    warning+=`El nombre es invalido <br>`
    valor=true;
  }

  if (!regexEmail.test(inputEmail.value)){
    warning+=`El email es invalido vuelva a intentarlo <br>`
    valor=true;
  }
  if (inputTextarea.value.length<10){
    warning+=`La consulta es invalida intente de nuevo <br>`
    valor=true;
  }
  if (valor){
    parrafo.innerHTML = warning;
  }else{
    parrafo.innerHTML="CONSULTA ENVIADA EXITOSAMENTE";
    formConsult.reset();
  }

})