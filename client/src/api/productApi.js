//src/api/productApi.js
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
            return responseData;
        } else {
            console.error('Unexpected response type:', contentType);
            // Handle non-JSON responses here
        }
    } catch (error) {
        console.error('Error fetching products:', error);
    }
};

export default fetchProducts;
