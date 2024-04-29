import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice.js";

const store = configureStore({
    reducer:{
        products:productSlice,
    }
})

export default store