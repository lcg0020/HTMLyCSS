document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    
    const images = [
        {
            small: "../../img/rest1_small.png",
            medium: "../../img/rest1_medium.png",
            large: "../../img/rest1_large.png"
        },
        {
            small: "../img/rest6_small.png",
            medium: "../img/rest6_medium.png",
            large: "../img/rest6_large.png"
        },
        {
            small: "../img/rest7_small.png",
            medium: "../img/rest7_medium.png",
            large: "../img/rest7_large.png"
        },
        {
            small: "../img/rest8_small.png",
            medium: "../img/rest8_medium.png",
            large: "../img/rest8_large.png"
        },
        {
            small: "../img/rest9_small.png",
            medium: "../img/rest9_medium.png",
            large: "../img/rest9_large.png"
        },
        {
            small: "../img/rest10_small.png",
            medium: "../img/rest10_medium.png",
            large: "../img/rest10_large.png"
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

    setInterval(changeImage, 50000);
    changeImage();
});