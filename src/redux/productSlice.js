import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        count:0,
    },
    reducers: {
        addToCart: (state, action) => {
            state.products.push(action.payload);
        },
        updateCount: (state, action) => {
            state.count = action.payload;
        },
    },
});

export const { addToCart , updateCount } = productSlice.actions;
export default productSlice.reducer;