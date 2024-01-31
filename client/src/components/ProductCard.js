import React, { useRef, useEffect } from 'react';

const ProductCard = ({ product }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const image = new Image();

        let imageSrc = null;
        try {
            const match = product.imagesrc.match(/https?:\/\/[^\s]+/);
            imageSrc = match ? match[0] : null;
        } catch (error) {
            console.error('Error processing imagesrc:', error);
        }

        if (imageSrc) {
            image.src = imageSrc;
            image.onload = () => {
                context.drawImage(image, 0, 0, canvas.width, canvas.height);
            };
        } else {
            console.warn('Image source is null or undefined.');
        }
    }, [product.imagesrc]);

    return (
        <div className="product-card">
            <canvas ref={canvasRef} />
            <div className="product-body" dangerouslySetInnerHTML={{ __html: product.bodyhtml }} />
        </div>
    );
};

export default ProductCard;