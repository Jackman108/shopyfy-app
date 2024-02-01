//src/utils/canvasUtils.js

export const loadCanvasImage = (imageSrc, canvasRef) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const image = new Image();

    try {
        const match = imageSrc.match(/https?:\/\/[^\s]+/);
        const processedImageSrc = match ? match[0] : null;

        if (processedImageSrc) {
            image.src = processedImageSrc;
            image.onload = () => {
                drawImageOnCanvas(context, image, canvas.width, canvas.height);
            };
        } else {
            console.warn('Image source is null or undefined.');
        }
    } catch (error) {
        console.error('Error processing imagesrc:', error);
    }
};

export const drawImageOnCanvas = (context, image, width, height) => {
    context.drawImage(image, 0, 0, width, height);
};
