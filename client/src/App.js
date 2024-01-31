// src/App.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './redux/reducer';
import ProductGrid from './components/ProductGrid';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5050/getProducts');
        console.log('Raw Server Response:', response);

        if (!response.ok) {
          throw new Error(`Server response not OK: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const responseData = await response.json();
                dispatch(setProducts(responseData));
        } else {
          console.error('Unexpected response type:', contentType);
          // Handle non-JSON responses here
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
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
