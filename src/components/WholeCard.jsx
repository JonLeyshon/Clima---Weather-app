import { useDispatch, useSelector } from "react-redux";
import DailyHighlights from "./DailyHighlights";
import DailyWeather from "./DailyWeather";
import TimeLine from "./Timeline";
import { selectCoords, selectTimeLineSelection } from "../redux/UserInputSlice";
import {
  fetchCoordsByCity,
  fetchCurrentWeatherData,
  fetchDailyWeather,
  fetchThreeHourlyWeather,
} from "./Utils/GetDataFunctions";
import { setCurrentWeather } from "../redux/currentWeatherSice";
import { useEffect } from "react";
import { setTimelineWeather } from "../redux/timelineWeatherSlice";
import GooglePrediction from "../GooglePrediction";

const WholeCard = () => {
  const coords = useSelector(selectCoords);
  const timelineSelection = useSelector(selectTimeLineSelection);
  const dispatch = useDispatch();

  // retrieve the current weather by coords
  const handleCurrentWeatherData = async () => {
    const res = await fetchCurrentWeatherData(coords.lat, coords.lon);
    dispatch(setCurrentWeather(res));
  };

  //retrieve timeline weather based on week or hourly selection
  const handleTimeLineWeatherData = async (selection) => {
    if (selection === "Week") {
      const res = await fetchDailyWeather(coords.lat, coords.lon);
      dispatch(setTimelineWeather(res));
    } else {
      const res = await fetchThreeHourlyWeather(coords.lat, coords.lon);
      dispatch(setTimelineWeather(res));
    }
  };

  //retrieve weather everytime the coordinates or timeline selection changes

  useEffect(() => {
    handleCurrentWeatherData();
    handleTimeLineWeatherData(timelineSelection);
  }, [coords, timelineSelection]);
  return (
    <>
      <div className="bg-gray-50 grid grid-cols-1 lg:grid-cols-3 p-2 h-screen">
        <DailyWeather />

        <div className="col-span-2">
          <TimeLine />
          <DailyHighlights />
        </div>
      </div>
    </>
  );
};

export default WholeCard;
