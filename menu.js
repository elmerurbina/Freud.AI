document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón de toggle del menú y el menú mismo
    var menuToggle = document.querySelector('.menu-toggle');
    var menu = document.querySelector('.menu');

    // Ocultar el menú inicialmente
    menu.style.display = 'none';

    // Agregar evento de clic al botón de toggle
    menuToggle.addEventListener('click', function() {
        // Alternar la visibilidad del menú cuando se hace clic en el botón de toggle
        if (menu.style.display === 'none' || menu.style.display === '') {
            menu.style.display = 'block';
        } else {
            menu.style.display = 'none';
        }
    });
});
