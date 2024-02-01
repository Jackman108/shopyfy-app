// src/api/productApi.test.js
import fetchProducts from '../api/productApi';

// Mock the global fetch
global.fetch = jest.fn();

beforeEach(() => {
    fetch.mockClear();
});

test('fetches products successfully with JSON content type', async () => {
    const mockProducts = [{ id: 1, name: 'Test Product' }];
    fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockProducts),
        headers: {
            get: () => 'application/json',
        },
    });

    const result = await fetchProducts();
    expect(result).toEqual(mockProducts);
    expect(fetch).toHaveBeenCalledWith('http://localhost:5050/getProducts');
});

test('returns undefined for unexpected content type', async () => {
    fetch.mockResolvedValueOnce({
        ok: true,
        headers: {
            get: () => 'text/html',
        },
        json: () => Promise.resolve({}),
    });

    const result = await fetchProducts();
    expect(result).toBeUndefined();
});