document.getElementById('valores').addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir la acción por defecto

    // Definir estilos para la ventana emergente
    var popupStyles = 'width=600,height=600,top=100,left=100,scrollbars=yes';

    // Crear la nueva ventana
    var valuesWindow = window.open('', '_blank', popupStyles);

    // Escribir los valores
    valuesWindow.document.write('<html><head><title>Nuestros Valores</title>');
    valuesWindow.document.write('<style>'); // Agregar estilos CSS
    valuesWindow.document.write('body { font-family: Arial, sans-serif; padding: 20px; background-color: #f0f0f0;}');
    valuesWindow.document.write('h3 { margin-bottom: 15px; }');
    valuesWindow.document.write('p { margin-bottom: 10px; }');
    valuesWindow.document.write('b { font-weight: bold; }');
    valuesWindow.document.write('</style>'); // Cierre de los estilos CSS
    valuesWindow.document.write('</head><body>');
    valuesWindow.document.write('<div class="values-content">'); // Obtener el documento por el nombre de clase
    valuesWindow.document.write('<h3>Nuestros Valores</h3>');
    valuesWindow.document.write('<p><b>Empatía:</b> Nos comprometemos a comprender y empatizar con las experiencias y emociones de nuestros usuarios para proporcionar un apoyo genuino y personalizado.</p>');
    valuesWindow.document.write('<p><b>Confidencialidad:</b> Valoramos y protegemos la confidencialidad de la información de nuestros usuarios, asegurando un entorno seguro y de confianza.</p>');
    valuesWindow.document.write('<p><b>Ética:</b> Nos adherimos a los más altos estándares éticos en la práctica de la psicología en línea, garantizando la integridad y el respeto en todas nuestras interacciones.</p>');
    valuesWindow.document.write('<p><b>Innovación:</b> Buscamos continuamente nuevas formas de utilizar la tecnología para mejorar el bienestar psicológico y ofrecer soluciones innovadoras y efectivas a nuestros usuarios.</p>');
    valuesWindow.document.write('<p><b>Accesibilidad:</b> Nos esforzamos por hacer que el apoyo psicológico sea accesible para todos, eliminando barreras geográficas, económicas y sociales.</p>');
    valuesWindow.document.write('<p><b>Colaboración:</b> Valoramos la colaboración y el trabajo en equipo, trabajando en conjunto con nuestros usuarios y profesionales de la salud mental para lograr mejores resultados.</p>');
    valuesWindow.document.write('<p><b>Empoderamiento:</b> Capacitamos a nuestros usuarios para que tomen el control de su bienestar psicológico, proporcionándoles las herramientas y el apoyo necesarios para enfrentar y superar los desafíos emocionales.</p>');
    valuesWindow.document.write('</div>');
    valuesWindow.document.write('</body></html>');

    // Cerrar la ventana de valores
    window.addEventListener('beforeunload', function () {
        valuesWindow.close();
    });
});
