const equisInput = document.getElementById("equisinput");
const inputBuscador = document.getElementById("barraseacrh");
const btnCerrar = document.getElementById("btn-cerrar");
const buscador = document.querySelector(".divcenter");
const boton = document.getElementById("boton-search");

inputBuscador.addEventListener("keyup",()=>{
    if(inputBuscador.value.length>0){
        equisInput.style.display="block";
    }
    else{
        equisInput.style.display="none";
    }
})

equisInput.addEventListener("click",()=>{
    inputBuscador.value = "";
    equisInput.style.display="none";
});

btnCerrar.addEventListener("click",()=>{
    buscador.style.display = "none";
})

boton.addEventListener("click",()=>{
    buscador.style.display = "block";
});
