document.addEventListener("DOMContentLoaded", function () {
    const imagen_menu = document.getElementById("imagen_menu");
    const btnPrevMenu = document.getElementById("btn-prev-menu");
    const btnNextMenu  = document.getElementById("btn-next-menu");

    const imagesMenu = [ 
        {
            src: "/img/rest5_small.webp",
            srcset: "/img/rest5_medium.webp 768w, /img/rest5_large.webp 1024w"
        },
        {
            src: "/img/rest6_small.webp",
            srcset: "/img/rest6_medium.webp 768w, /img/rest6_large.webp 1024w"
        },
        {
            src: "/img/rest7_small.webp",
            srcset: "/img/rest7_medium.webp 768w, /img/rest7_large.webp 1024w"
        },
        {
            src: "/img/rest8_small.webp",
            srcset: "/img/rest8_medium.webp 768w, /img/rest8_large.webp 1024w"
        },
        {
            src: "/img/rest9_small.webp",
            srcset: "/img/rest9_medium.webp 768w, /img/rest9_large.webp 1024w"
        },
        {
            src: "/img/rest10_small.webp",
            srcset: "/img/rest10_medium.webp 768w, /img/rest10_large.webp 1024w"
        },     
    ];

    let currentIndexMenu = 0;

    // Función para actualizar la imagen
    function updateImageMenu() {
        imagen_menu.src = imagesMenu[currentIndexMenu].src;
        imagen_menu.srcset = imagesMenu[currentIndexMenu].srcset; 
    }

    // Evento para el botón "Atrás"
    btnPrevMenu.addEventListener("click", function () {
        currentIndexMenu = (currentIndexMenu - 1 + imagesMenu.length) % imagesMenu.length;
        updateImageMenu();
    });

    // Evento para el botón "Adelante"
    btnNextMenu.addEventListener("click", function () {
        currentIndexMenu = (currentIndexMenu + 1) % imagesMenu.length;
        updateImageMenu();
    });

    // Inicializa la imagen
    updateImageMenu();
});