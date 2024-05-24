var modal = document.getElementById("modal-consulta");
var btn = document.getElementsByClassName("btn")[0];
var span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
    modal.style.display= 'block';
}
span.onclick = function(){
    modal.style.display ='none';
}

// Validacion del formulario de Eventos

const formConsult=document.getElementById("formulario")
const inputNombre=document.getElementById("nombre");
const inputEmail=document.getElementById("email");
const inputTelefono=document.getElementById("telefono");
const inputTextarea=document.getElementById("consulta");
const parrafo=document.getElementById("error");

formConsult.addEventListener("submit",e=>{
    e.preventDefault();
    let warning="";
    let valor= false;
    parrafo.innerHTML="";
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  

    if (inputNombre.value.length<3){
        warning+=`El nombre es corto<br>`
        valor=true;
    }
    if (!regexEmail.test(inputEmail.value)){
        warning+=`El email no es valido<br>`
        valor=true;
    }
    if (inputTelefono.value.length>20){
        warning+=`El numero de telefono no es valido<br>`
        valor=true;
    }
    if (inputTextarea.value.length<3){
        warning+=`Consulta no valida<br>`
        valor=true;
    }
    if (valor){
        parrafo.innerHTML=warning;
    }else{
        parrafo.innerHTML="Su consulta fue enviada";
        formConsult.reset();
    }
    
})
