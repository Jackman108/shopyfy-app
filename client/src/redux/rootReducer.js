// src/redux/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './reducer';

const rootReducer = combineReducers({
    products: productsReducer
});

export default rootReducer;