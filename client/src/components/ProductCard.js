import React, { useRef, useEffect } from 'react';
import { loadCanvasImage } from '../utils/canvasUtils';
import { findProductUrlInBodyHtml } from '../utils/urlUtils';

const ProductCard = ({ product }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        loadCanvasImage(product.imagesrc, canvasRef);
    }, [product.imagesrc]);

    const handleClick = () => {
        const productUrl = findProductUrlInBodyHtml(product.bodyhtml);

        if (productUrl) {
            window.location.href = productUrl;
        }
    };

    return (
        <div className="product-card" onClick={handleClick}>
            <canvas className="product-canvas" ref={canvasRef} />
            <div className="product-body" dangerouslySetInnerHTML={{ __html: product.bodyhtml }} />
            <div className="hover-overlay"></div>
        </div>
    );
};

export default ProductCard;
