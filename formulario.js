document.getElementById("subscription-form").addEventListener("submit", function(event) {
    // Evitar que el formulario se envíe de forma predeterminada
    event.preventDefault();
    
    // Obtener el valor del correo electrónico ingresado por el usuario
    var email = document.getElementById("email-input").value;
    
    // Enviar el formulario usando AJAX (aquí se puede agregar el código necesario para enviar el formulario)
    
    // Mostrar el mensaje de agradecimiento
    document.getElementById("thank-you-message").style.display = "block";
});
