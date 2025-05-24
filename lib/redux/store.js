import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/lib/redux/slices/userSlice"
import galleryReducer from "@/lib/redux/slices/gallerSlice"
export const store = configureStore({
    reducer:{
        user: userReducer,
        gallery : galleryReducer
    }
})