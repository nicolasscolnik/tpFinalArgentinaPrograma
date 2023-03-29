// function myFunction(){
//     window.open(href='Contacto/formularioContacto.html');
// }

function instancia(){
    const btnContacto = document.getElementById("btnContacto");
    btnContacto.addEventListener("click", abrirVentana);
}

function abrirVentana(){
    window.open('Contacto/formularioContacto.html','name','width=600,height=400');
}