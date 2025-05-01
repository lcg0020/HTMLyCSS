document.addEventListener("DOMContentLoaded", function () {
    const imagen_quienes = document.getElementById("imagen_quienes");
    const btnPrevQuienes  = document.getElementById("btn-prev-quienes");
    const btnNextQuienes   = document.getElementById("btn-next-quienes");

    const imagesQuienes = [
        {
            src: "/img/rest1_small.png",
            srcset: "/img/rest1_medium.png 768w, /img/rest1.png 1024w"
        },
        {
            src: "/img/rest2_small.png",
            srcset: "/img/rest2_medium.png 768w, /img/rest2.png 1024w"
        },
        {
            src: "/img/rest3_small.png",
            srcset: "/img/rest3_medium.png 768w, /img/rest3.png 1024w"
        },
        {
            src: "/img/rest4_small.png",
            srcset: "/img/rest4_medium.png 768w, /img/rest4.png 1024w"
        },
    ];

    let currentIndexQuienes = 0;

    // Función para actualizar la imagen
    function updateImageQuienes() {
        imagen_quienes.src = imagesQuienes[currentIndexQuienes].src;
        imagen_quienes.srcset = imagesQuienes[currentIndexQuienes].srcset; 
    }

    // Evento para el botón "Atrás"
    btnPrevQuienes.addEventListener("click", function () {
        currentIndexQuienes = (currentIndexQuienes - 1 + imagesQuienes.length) % imagesQuienes.length;
        updateImageQuienes();
    });

    // Evento para el botón "Adelante"
    btnNextQuienes.addEventListener("click", function () {
        currentIndexQuienes = (currentIndexQuienes + 1) % imagesQuienes.length;
        updateImageQuienes();
    });

    // Inicializa la imagen
    updateImageQuienes();
});