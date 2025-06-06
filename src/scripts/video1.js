document.getElementById("video-thumbnail").addEventListener("click", function () {
    let iframe = document.createElement("iframe");
    iframe.src = "https://www.youtube.com/embed/3UKJz9iXHNo?autoplay=1";
    iframe.width = "560";
    iframe.height = "315";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    iframe.allowFullscreen = true;

    this.parentNode.replaceChild(iframe, this);
});