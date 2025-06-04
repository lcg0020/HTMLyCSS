document.addEventListener("DOMContentLoaded", function() {
    const imagen_chef = document.getElementById("imagen_chef");
    const btnPrevChef = document.getElementById("btn-prev-chef");
    const btnNextChef = document.getElementById("btn-next-chef");
    const imagesChef = [
        {
            src: "/img/chef1_small.webp",
            srcset: "/img/chef1_medium.webp 768w, /img/chef1_large.webp 1024w"
        },
        {
            src: "/img/chef2_small.webp",
            srcset: "/img/chef2_medium.webp 768w, /img/chef2_large.webp 1024w"
        }
    ];
    let currentIndexChef = 0;
    // Función para actualizar la imagen
    function updateImageChef() {
        imagen_chef.src = imagesChef[currentIndexChef].src;
        imagen_chef.srcset = imagesChef[currentIndexChef].srcset;
    }
    // Evento para el botón "Atrás"
    btnPrevChef.addEventListener("click", function() {
        currentIndexChef = (currentIndexChef - 1 + imagesChef.length) % imagesChef.length;
        updateImageChef();
    });
    // Evento para el botón "Adelante"
    btnNextChef.addEventListener("click", function() {
        currentIndexChef = (currentIndexChef + 1) % imagesChef.length;
        updateImageChef();
    });
    // Inicializa la imagen
    updateImageChef();
});

//# sourceMappingURL=HTMLyCSS.38a006a2.js.map
