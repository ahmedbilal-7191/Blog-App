import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
const store = configureStore({
    reducer: {
        //for multiple this approach for single reducer:authslice
        auth: authSlice,
    }
})
export default store