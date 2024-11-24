import { configureStore } from "@reduxjs/toolkit";
import userInputReducer from "./UserInputSlice";

const store = configureStore({
  reducer: {
    userInput: userInputReducer,
  },
});

export default store;
