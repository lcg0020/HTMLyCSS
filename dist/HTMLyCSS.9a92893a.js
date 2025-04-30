document.addEventListener("DOMContentLoaded", function() {
    const imagen_menu = document.getElementById("imagen_menu");
    const btnPrevMenu = document.getElementById("btn-prev-menu");
    const btnNextMenu = document.getElementById("btn-next-menu");
    const images = [
        '../img/rest5.png',
        '../img/rest6.png',
        '../img/rest7.png',
        '../img/rest8.png',
        '../img/rest9.png',
        '../img/rest10.png'
    ];
    let currentIndex = 0;
    // Función para actualizar la imagen
    function updateImage() {
        imagen_menu.src = images[currentIndex];
    }
    // Evento para el botón "Atrás"
    btnPrevMenu.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
    // Evento para el botón "Adelante"
    btnNextMenu.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
    // Inicializa la imagen
    updateImage();
});

//# sourceMappingURL=HTMLyCSS.9a92893a.js.map
