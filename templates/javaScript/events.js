var modal = document.getElementById("modal-consulta");
var btn = document.getElementsByClassName("btn")[0];
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display= 'block';
}
span.onclick = function(){
    modal.style.display ='none';
}