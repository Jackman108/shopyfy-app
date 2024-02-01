// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/reducer';
import ProductGrid from './components/ProductGrid';
import fetchProducts from './api/productApi'; 
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await fetchProducts();
        dispatch(setProducts(responseData));
      } catch (error) {
        console.error('Error in fetching products:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="app-container">
      <header>
        <h1>Products</h1>
      </header>
      <main>
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;
