const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Carpeta de entrada y salida
const inputFolder = "C:/Users/laucg/OneDrive/Desktop/UOC Máster Web/HTML/PEC2/HTMLyCSS/img/";
const outputFolder = "C:/Users/laucg/OneDrive/Desktop/UOC Máster Web/HTML/PEC2/HTMLyCSS/img-optimized/";

// Asegurarse de que la carpeta de salida existe
if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
}

// Optimizar imágenes
fs.readdirSync(inputFolder).forEach((file) => {
    const inputPath = path.join(inputFolder, file);
    const outputPath = path.join(outputFolder, file.replace(/\.(jpg|jpeg|png)$/, ".webp"));

    sharp(inputPath)
        .resize(1024) // Redimensiona la imagen a 1024px de ancho
        .toFormat("webp") // Convierte la imagen a WebP
        .toFile(outputPath, (err, info) => {
            if (err) {
                console.error(`Error procesando ${file}:`, err);
            } else {
                console.log(`Imagen optimizada: ${outputPath}`);
            }
        });
});