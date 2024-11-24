import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationInput: "London",
};

const userInputSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    setLocationInput: (state, action) => {
      state.locationInput = action.payload;
    },
  },
});

export const { setLocationInput } = userInputSlice.actions;

export const selectLocationInput = (state) => state.userInput.locationInput;

export default userInputSlice.reducer;
