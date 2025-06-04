document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    
    const images = [
        {
            small: "../../img/rest1_small.webp",
            medium: "../../img/rest1_medium.webp",
            large: "../../img/rest1_large.webp"
        },
        {
            small: "../img/rest6_small.webp",
            medium: "../img/rest6_medium.webp",
            large: "../img/rest6_large.webp"
        },
        {
            small: "../img/rest7_small.webp",
            medium: "../img/rest7_medium.webp",
            large: "../img/rest7_large.webp"
        },
        {
            small: "../img/rest8_small.webp",
            medium: "../img/rest8_medium.webp",
            large: "../img/rest8_large.webp"
        },
        {
            small: "../img/rest9_small.webp",
            medium: "../img/rest9_medium.webp",
            large: "../img/rest9_large.webp"
        },
        {
            small: "../img/rest10_small.webp",
            medium: "../img/rest10_medium.webp",
            large: "../img/rest10_large.webp"
        }
    ];
    
    let currentIndex = 0;

    function changeImage() {
        let screenWidth = window.innerWidth;

        // Selecciona la imagen correcta según el tamaño de pantalla
        let imageSrc = screenWidth < 768 ? images[currentIndex].small :
                       screenWidth < 1024 ? images[currentIndex].medium :
                       images[currentIndex].large;

        carousel.style.backgroundImage = `url(${imageSrc})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 100000);
    changeImage();
});