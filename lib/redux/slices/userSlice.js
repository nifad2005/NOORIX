import { createSlice } from "@reduxjs/toolkit"


const initialeState = {
    name : "",
    email:"",
    isLogedIn : false,
    role : "",
    image : ""
}

export const userSlice = createSlice({
    name : "user",
    initialState: initialeState,
    reducers: {
        login :(state,action)=>{
            state.name = action.payload.name
            state.email = action.payload.email
            state.image = action.payload.image
            state.role = action.payload.role
            state.isLogedIn = true
        },
        logout:(state,action)=>{
            state.name = ""
            state.email = ""
            state.role = ""
            state.image = ""
            state.isLogedIn = false
        }
    }
})


export const {login, logout } = userSlice.actions
export default userSlice.reducer