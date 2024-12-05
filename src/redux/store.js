import { configureStore } from "@reduxjs/toolkit";
import userInputReducer from "./UserInputSlice";
import currentWeatherReducer from "./currentWeatherSice";
import timelineReducer from "./timelineWeatherSlice";

const store = configureStore({
  reducer: {
    userInput: userInputReducer,
    currentWeatherSlice: currentWeatherReducer,
    timelineWeatherSlice: timelineReducer,
  },
});

export default store;
