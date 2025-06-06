document.querySelectorAll(".video-thumbnail").forEach(thumbnail => {
    thumbnail.addEventListener("click", function () {
        let videoId = this.getAttribute("data-video");
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.width = "560";
        iframe.height = "315";
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        iframe.referrerPolicy = "strict-origin-when-cross-origin";
        iframe.allowFullscreen = true;

        // Mantener el tamaño del contenedor antes de reemplazar
        this.parentNode.style.minHeight = "315px";
        this.parentNode.replaceChild(iframe, this);
    });
});