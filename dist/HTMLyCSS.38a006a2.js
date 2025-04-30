document.addEventListener("DOMContentLoaded", function() {
    const imagen_chef = document.getElementById("imagen_chef");
    const btnPrevChef = document.getElementById("btn-prev-chef");
    const btnNextChef = document.getElementById("btn-next-chef");
    const images = [
        '/img/chef1.jpg',
        '/img/chef2.jpg'
    ];
    let currentIndex = 0;
    // Función para actualizar la imagen
    function updateImage() {
        imagen_chef.src = images[currentIndex];
    }
    // Evento para el botón "Atrás"
    btnPrevChef.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
    // Evento para el botón "Adelante"
    btnNextChef.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
    // Inicializa la imagen
    updateImage();
});

//# sourceMappingURL=HTMLyCSS.38a006a2.js.map
