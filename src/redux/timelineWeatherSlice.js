import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  timelineWeather: {},
};

const timelineWeatherSlice = createSlice({
  name: "timelineWeatherSlice",
  initialState,
  reducers: {
    setTimelineWeather: (state, action) => {
      state.timelineWeather = action.payload;
    },
  },
});

export const { setTimelineWeather } = timelineWeatherSlice.actions;

export const selectTimelineWeather = (state) =>
  state.timelineWeatherSlice.timelineWeather;

export default timelineWeatherSlice.reducer;
