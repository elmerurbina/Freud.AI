
var leerMasLinks = document.querySelectorAll('.leerMas');

// Para cada enlace "Leer más", añadir el evento de clic
leerMasLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar comportamiento predeterminado del enlace
        var parrafosOcultos = this.parentElement.nextElementSibling; // Obtener el siguiente elemento (div con clase "parrafosOcultos")
        if (parrafosOcultos.style.display === 'none' || parrafosOcultos.style.display === '') {
            parrafosOcultos.style.display = 'block'; // Mostrar los párrafos ocultos
            this.textContent = 'Leer menos'; // Cambiar el texto del enlace a "Leer menos"
            this.style.color = 'red';
        } else {
            parrafosOcultos.style.display = 'none'; // Ocultar los párrafos ocultos
            this.textContent = 'Leer más'; // Cambiar el texto del enlace a "Leer más"
            this.style.color = 'yellow';
             
        }
    });
});
