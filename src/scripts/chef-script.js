document.addEventListener("DOMContentLoaded", function () {
    const imagen_chef = document.getElementById("imagen_chef");
    const btnPrevChef = document.getElementById("btn-prev-chef");
    const btnNextChef  = document.getElementById("btn-next-chef");

    const imagesChef = [
        {
            src: "/img/chef1_small.webp",
            srcset: "/img/chef1_medium.webp 768w, /img/chef1_large.webp 1024w"
        },
        {
            src: "/img/chef2_small.webp",
            srcset: "/img/chef2_medium.webp 768w, /img/chef2_large.webp 1024w"
        },
    ];

    let currentIndexChef = 0;

    // Aplicar lazy loading en la imagen
    imagen_chef.setAttribute("loading", "lazy");

    // Función para actualizar la imagen 
    function updateImageChef() {
        let img = new Image();
        img.src = imagesChef[currentIndexChef].src;
        img.srcset = imagesChef[currentIndexChef].srcset;
        img.loading = "lazy";

        img.onload = function () {
            imagen_chef.src = img.src;
            imagen_chef.srcset = img.srcset;
        };
    }

    // Evento para el botón "Atrás"
    btnPrevChef.addEventListener("click", function () {
        currentIndexChef = (currentIndexChef - 1 + imagesChef.length) % imagesChef.length;
        updateImageChef();
    });

    // Evento para el botón "Adelante"
    btnNextChef.addEventListener("click", function () {
        currentIndexChef = (currentIndexChef + 1) % imagesChef.length;
        updateImageChef();
    });

    // Inicializa la imagen
    updateImageChef();
});