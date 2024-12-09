import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentWeather: {},
};

const currentWeatherSlice = createSlice({
  name: "currentWeatherSlice",
  initialState,
  reducers: {
    setCurrentWeather: (state, action) => {
      state.currentWeather = action.payload;
    },
  },
});

export const { setCurrentWeather } = currentWeatherSlice.actions;

export const selectCurrentWeather = (state) =>
  state.currentWeatherSlice.currentWeather;

export default currentWeatherSlice.reducer;
