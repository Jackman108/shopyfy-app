// src/components/ProductGrid.js
import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import { createSelector } from 'reselect';

const selectProductsRaw = (state) => state.products;

export const selectProducts = createSelector(
    [selectProductsRaw],
    (products) => products || []
);

const ProductGrid = () => {
    const productsRaw = useSelector(selectProductsRaw);
    console.log('productsRaw:', productsRaw);

    const products = useSelector(state => state.products);
    console.log('products:', products);


    return (
        <div className="product-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid;
