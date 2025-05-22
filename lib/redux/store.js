import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/lib/redux/slices/userSlice"

export const store = configureStore({
    reducer:{
        user: userReducer,
    }
})