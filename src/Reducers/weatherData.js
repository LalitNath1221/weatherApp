import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null,
    isLoading: false
}

export const weatherSlice = createSlice({
    name:"weatherData",
    initialState,
    reducers:{
        setData: (state, action)=>{
            if(action.payload.data){
                state.data = action.payload.data
            }
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload.isLoading;
        }
    }
})


export const {setData, setLoading} = weatherSlice.actions

export default weatherSlice.reducer