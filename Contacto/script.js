function myFunction() {
    alert('Gracias por su contacto!!! Nicolas Scolnik se comunicara a la brevedad por la via preferida seleccionada.');
    location.reload();
}

function instancia(){
    const btnEnviar = document.getElementById("Enviar");
    btnEnviar.addEventListener("click", myFunction);
}