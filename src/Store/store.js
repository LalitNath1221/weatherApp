import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../Reducers/weatherData"
import weatherData from "../Reducers/weatherData";

const rootReducer = {
    weatherData: weatherReducer,
    // Add other reducers here if you have more slices
  };

export const store = configureStore({
    reducer:rootReducer
})