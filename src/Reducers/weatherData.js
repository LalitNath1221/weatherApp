import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

export const weatherSlice = createSlice({
    name:"weatherData",
    initialState,
    reducers:{
        setData: (state, action)=>{
            if(action.payload.data){
                state.data = action.payload.data
            }
        }
    }
})


export const {setData} = weatherSlice.actions

export default weatherSlice.reducer