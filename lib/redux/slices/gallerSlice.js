import { createSlice } from "@reduxjs/toolkit"

const initialeState = {
    gallery :[
        // {
        //     createdAt: "2025-05-22T17:50:26.782Z",
        //     date:"2025-05-22",
        //     image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQw",
        //     title: "Read😶",
        //     userEmail: "nifaduzzaman2005@gmail.com",
        //     userImage:"https://lh3.googleusercontent.com/a/ACg8ocJYYOQInJwQK3SvyRhe5YmK0fleSMzbCI_OoWk-wz9TsWZoFrlq=s96-c",
        //     userName: "Nifad Uzzaman",
        //     _id:"682f63e28c734791b920d41e"
        // }
    ]
}

export const gallerySlice = createSlice({
    name : 'gallery',
    initialState : initialeState,
    reducers:{
        SetGalleryData:(state,action)=>{
            state.gallery = [...action.payload]
        }
    }
}) 
export const {SetGalleryData} = gallerySlice.actions
export default  gallerySlice.reducer