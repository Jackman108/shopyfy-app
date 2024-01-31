//src/redux/store.js
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {
            }
        })
})

export default store;
