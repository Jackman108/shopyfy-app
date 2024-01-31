//src/redux/reducer.js
import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            console.log('Received Payload:', action.payload);

            return action.payload;
        },
    },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
