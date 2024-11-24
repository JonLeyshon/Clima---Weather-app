import DaySummary from "./DailyHighlights/DaySummary";
import SearchBar from "./DailyHighlights/SearchBar";
import AnimatedWeather from "./DailyHighlights/animatedWeather";
import { fetchCurrentWeatherData } from "./GetDataFunctions";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLocationInput } from "../redux/UserInputSlice";

const DailyWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const locationSearch = useSelector(selectLocationInput);

  const updateWeatherData = async () => {
    const res = await fetchCurrentWeatherData(locationSearch);
    setWeatherData(res);
  };

  useEffect(() => {
    updateWeatherData();
  }, [locationSearch]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchBar />
      <AnimatedWeather weatherData={weatherData} />
      <DaySummary weatherData={weatherData} />
    </div>
  );
};

export default DailyWeather;
