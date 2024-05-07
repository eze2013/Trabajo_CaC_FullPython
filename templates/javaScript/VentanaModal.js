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