import DaySummary from "./DailyHighlights/DaySummary";
import SearchBar from "./DailyHighlights/SearchBar";
import AnimatedWeather from "./DailyHighlights/animatedWeather";
import { fetchCurrentWeatherData } from "./GetDataFunctions";
import { useEffect, useState } from "react";

const DailyWeather = () => {
  const [weatherData, setWeatherData] = useState("test");

  const updateWeatherData = (city) => {
    fetchCurrentWeatherData(city);
  };

  return (
    <>
      <SearchBar />
      <AnimatedWeather />
      <DaySummary />
    </>
  );
};

export default DailyWeather;
