document.addEventListener("DOMContentLoaded", function() {
    // Función para obtener el número de seguidores desde el almacenamiento local
    function obtenerSeguidores() {
        // Obtener el número de seguidores desde el almacenamiento local
        var seguidoresString = localStorage.getItem("seguidores");
        // Si no hay ningún valor almacenado, devolver 0
        if (!seguidoresString) {
            return 0;
        }
        // Convertir el valor almacenado en un número y devolverlo
        return parseInt(seguidoresString);
    }

    // Función para guardar el número de seguidores en el almacenamiento local
    function guardarSeguidores(seguidores) {
        // Convertir el número de seguidores a una cadena de texto y guardarla en el almacenamiento local
        localStorage.setItem("seguidores", seguidores.toString());
    }

    // Variable para almacenar el número de seguidores
    var seguidores = obtenerSeguidores();

    // Función para actualizar el contador de seguidores
    function actualizarContador() {
        // Seleccionar el elemento del contador de seguidores
        var contadorSeguidores = document.getElementById("contadorSeguidores");
        // Actualizar el contenido del contador con el número de seguidores actualizado
        contadorSeguidores.textContent = seguidores + " Seguidores: ";
        // Establecer el color blanco y alinear a la derecha
        contadorSeguidores.style.color = "#ffffff";
        contadorSeguidores.style.textAlign = "right";
    }

    // Función para manejar el evento de clic en el icono de seguir
    function seguir() {
        // Incrementar el contador de seguidores
        seguidores++;
        // Guardar el número de seguidores en el almacenamiento local
        guardarSeguidores(seguidores);
        // Actualizar el contador de seguidores en la página
        actualizarContador();
        // Mostrar el mensaje de agradecimiento
        alert("¡Gracias por seguirnos! Ahora tenemos " + seguidores + " seguidores.");
    }

    // Agregar evento de clic al icono de seguir
    document.getElementById("icono-seguir").addEventListener("click", seguir);

    // Actualizar el contador de seguidores al cargar la página
    actualizarContador();
});
