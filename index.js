let buton = document.getElementById("Simulador").disabled = true;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
    evento.preventDefault();
    let mensaje = document.getElementById("mensaje").value;

    if(mensaje.length == 0) {
        alert('No has escrito nada en el cuerpo del mail');
        return;
    }

    this.submit();
}