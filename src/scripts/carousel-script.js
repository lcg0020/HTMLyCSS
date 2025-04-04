document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("carousel");
    
    const images = [
        '../img/rest1.png',
        '../img/rest2.png',
        '../img/rest3.png',
        '../img/rest4.png',
        '../img/rest5.png',
        '../img/rest6.png',
        '../img/rest7.png',
        '../img/rest8.png',
        '../img/rest9.png',
        '../img/rest10.png'
    ];
    
    let currentIndex = 0;

    function changeImage() {
        carousel.style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 5000);
    changeImage();
});