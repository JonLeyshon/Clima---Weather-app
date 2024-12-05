import { useSelector } from "react-redux";
import {
  animationsPathsDay,
  animationsPathsNight,
} from "../Utils/amimationsPath";
import { Player } from "@lottiefiles/react-lottie-player";
import { selectCurrentWeather } from "../../redux/currentWeatherSice";

const AnimatedWeather = () => {
  const weatherData = useSelector(selectCurrentWeather);
  const calculateIsItDayOrNight = () => {
    if (!weatherData || !weatherData.sys) return null;
    const { dt } = weatherData;
    const { sunrise, sunset } = weatherData.sys;
    return dt >= sunrise && dt < sunset ? "day" : "night";
  };

  const handleWeatherPath = () => {
    if (!weatherData) return "loading...";
    const { main, description } = weatherData.weather[0]; // Get weather info
    const isDay = calculateIsItDayOrNight() === "day";
    const animationsPaths = isDay ? animationsPathsDay : animationsPathsNight;

    // Switch statement to decide path
    let path;
    switch (main) {
      case "Clear":
        path = isDay ? "clearSkyDay.json" : "clearSkyNight.json";
        break;

      case "Clouds":
        if (description === "few clouds") {
          path = isDay ? "fewCloudsDay.json" : "fewCloudsNight.json";
        } else if (description === "scattered clouds") {
          path = isDay
            ? "scatteredCloudsDay.json"
            : "scatteredCloudsNight.json";
        } else {
          path = isDay ? "fewCloudsDay.json" : "fewCloudsNight.json";
        }
        break;

      case "Mist":
      case "Haze":
      case "Fog":
        path = isDay ? "mistDay.json" : "mistNight.json";
        break;

      case "Rain":
        if (description === "shower rain") {
          path = isDay ? "showerDay.json" : "showerNight.json";
        } else {
          path = isDay ? "rainDay.json" : "rainNight.json";
        }
        break;

      case "Snow":
        path = isDay ? "snowDay.json" : "snowNight.json";
        break;

      case "Thunderstorm":
        path = isDay ? "thunderstormDay.json" : "thunderstormNight.json";
        break;

      default:
        path = null;
    }

    return path ? `/img/animations/${path}` : null;
  };

  const animationPath = handleWeatherPath();

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-2xl pt-10">
        {weatherData ? `${weatherData.name}` : "Loading..."}
      </p>

      <Player
        autoplay
        loop
        src={animationPath}
        style={{ height: "300px", width: "300px" }}
      />
    </div>
  );
};

export default AnimatedWeather;
