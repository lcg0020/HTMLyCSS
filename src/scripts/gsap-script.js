const script = document.createElement("script");
script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
script.onload = () => {
    gsap.from(".menu-item", { duration: 1.5, y: 50, opacity: 0, stagger: 0.3 });
    gsap.from(".imagen", { duration: 1.5, y: 50, opacity: 0, stagger: 0.3 });
};
document.head.appendChild(script);