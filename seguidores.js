document.addEventListener("DOMContentLoaded", function() {
    // Variable para almacenar el número de seguidores
    var seguidores = 0;

    // Función para actualizar el contador de seguidores
    function actualizarContador() {
        // Seleccionar el elemento del contador de seguidores
        var contadorSeguidores = document.getElementById("contadorSeguidores");
        // Actualizar el contenido del contador con el número de seguidores actualizado
        contadorSeguidores.textContent =  seguidores + "  Seguidores: ";
        contadorSeguidores.style.color = "#ffffff";
        contadorSeguidores.style.textAlign = "right";
    }

    // Agregar evento de clic al icono de seguir
    document.getElementById("icono-seguir").addEventListener("click", function(event) {
        // Evitar que el enlace se siga al hacer clic en el icono
        event.preventDefault();
        // Incrementar el contador de seguidores
        seguidores++;
        // Actualizar el contador de seguidores en la página
        actualizarContador();
        // Mostrar el mensaje de agradecimiento
        alert("¡Gracias por seguirnos! Ahora tenemos " + seguidores + " seguidores.");
    });
});
