document.addEventListener("DOMContentLoaded", function() {
    const imagen_quienes = document.getElementById("imagen_quienes");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const images = [
        '../img/rest1.png',
        '../img/rest2.png',
        '../img/rest3.png',
        '../img/rest4.png'
    ];
    let currentIndex = 0;
    // Función para actualizar la imagen
    function updateImage() {
        imagen_quienes.src = images[currentIndex];
    }
    // Evento para el botón "Atrás"
    btnPrev.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateImage();
    });
    // Evento para el botón "Adelante"
    btnNext.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateImage();
    });
    // Inicializa la imagen
    updateImage();
});

//# sourceMappingURL=HTMLyCSS.da316871.js.map
