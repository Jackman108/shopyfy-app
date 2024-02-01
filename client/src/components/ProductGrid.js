// src/components/ProductGrid.js
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    const products = useSelector(state => state.products);

    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
