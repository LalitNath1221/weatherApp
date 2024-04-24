import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Reducers/weatherData"
import weatherData from "../Reducers/weatherData";

export const store = configureStore({
    reducer:weatherReducer
})