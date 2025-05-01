document.addEventListener("DOMContentLoaded", function() {
    const imagen_menu = document.getElementById("imagen_menu");
    const btnPrevMenu = document.getElementById("btn-prev-menu");
    const btnNextMenu = document.getElementById("btn-next-menu");
    const imagesMenu = [
        {
            src: "/img/rest5_small.png",
            srcset: "/img/rest5_medium.png 768w, /img/rest5_large.png 1024w"
        },
        {
            src: "/img/rest6_small.png",
            srcset: "/img/rest6_medium.png 768w, /img/rest6_large.png 1024w"
        },
        {
            src: "/img/rest7_small.png",
            srcset: "/img/rest7_medium.png 768w, /img/rest7_large.png 1024w"
        },
        {
            src: "/img/rest8_small.png",
            srcset: "/img/rest8_medium.png 768w, /img/rest8_large.png 1024w"
        },
        {
            src: "/img/rest9_small.png",
            srcset: "/img/rest9_medium.png 768w, /img/rest9_large.png 1024w"
        },
        {
            src: "/img/rest10_small.png",
            srcset: "/img/rest10_medium.png 768w, /img/rest10_large.png 1024w"
        }
    ];
    let currentIndexMenu = 0;
    // Función para actualizar la imagen
    function updateImageMenu() {
        imagen_menu.src = imagesMenu[currentIndexMenu].src;
        imagen_menu.srcset = imagesMenu[currentIndexMenu].srcset;
    }
    // Evento para el botón "Atrás"
    btnPrevMenu.addEventListener("click", function() {
        currentIndexMenu = (currentIndexMenu - 1 + imagesMenu.length) % imagesMenu.length;
        updateImageMenu();
    });
    // Evento para el botón "Adelante"
    btnNextMenu.addEventListener("click", function() {
        currentIndexMenu = (currentIndexMenu + 1) % imagesMenu.length;
        updateImageMenu();
    });
    // Inicializa la imagen
    updateImageMenu();
});

//# sourceMappingURL=HTMLyCSS.9a92893a.js.map
