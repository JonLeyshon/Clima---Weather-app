import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locationInput: "Liverpool",
  coords: { lat: 53.400002, lon: -2.983333 },
  timeLineSelection: "Week",
};

const userInputSlice = createSlice({
  name: "userInput",
  initialState,
  reducers: {
    setLocationInput: (state, action) => {
      state.locationInput = action.payload;
    },
    setCoords: (state, action) => {
      state.coords = action.payload;
    },
    setTimeLineSelection: (state, action) => {
      state.timeLineSelection = action.payload;
    },
  },
});

export const { setLocationInput } = userInputSlice.actions;
export const { setCoords } = userInputSlice.actions;
export const { setTimeLineSelection } = userInputSlice.actions;

export const selectLocationInput = (state) => state.userInput.locationInput;
export const selectCoords = (state) => state.userInput.coords;
export const selectTimeLineSelection = (state) =>
  state.userInput.timeLineSelection;

export default userInputSlice.reducer;
