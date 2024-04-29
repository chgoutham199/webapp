import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        // log:false,
    },
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload);
        },
    },
});

export const { addToCart } = productSlice.actions;
export default productSlice.reducer;