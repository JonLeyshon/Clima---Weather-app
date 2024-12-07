import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DaySummary from "./DailyWeather/DaySummary";
import SearchBar from "./DailyWeather/SearchBar";
import AnimatedWeather from "./DailyWeather/animatedWeather";
import {
  fetchCurrentWeatherData,
  fetchCurrentWeatherDataByCoords,
} from "./Utils/GetDataFunctions";
import {
  selectLocationInput,
  selectCoords,
  setLocationInput,
} from "../redux/UserInputSlice";
import {
  selectCurrentWeather,
  setCurrentWeather,
} from "../redux/currentWeatherSice";
import Spinner from "./Utils/Spinner";

const DailyWeather = () => {
  const currentWeatherData = useSelector(selectCurrentWeather);
  const locationSearch = useSelector(selectLocationInput);
  const coords = useSelector(selectCoords);
  const dispatch = useDispatch();

  useEffect(() => {}, [currentWeatherData]);

  if (!currentWeatherData.main) {
    return <Spinner />;
  }

  return (
    <div className="h-full bg-slate-50">
      <div className="text-center flex justify-center">
        <img
          src="/img/png/logo-no-background.png"
          className="w-14 pb-4"
          alt=""
        />
      </div>
      <div>
        <SearchBar />
      </div>
      <div className="">
        <AnimatedWeather />
        <DaySummary weatherData={currentWeatherData} />
      </div>
    </div>
  );
};

export default DailyWeather;
