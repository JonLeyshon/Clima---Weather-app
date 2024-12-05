import { useSelector } from "react-redux";
import { selectCurrentWeather } from "../../redux/currentWeatherSice";
import Spinner from "../Utils/Spinner";

const HourlyCarousel = ({ dt, main, weather }) => {
  const currentWeather = useSelector(selectCurrentWeather);
  if (!dt || !main || !weather || weather.length === 0) {
    return (
      <div className="w-28 h-36 rounded-md bg-white m-auto flex justify-center items-center">
        <Spinner />
      </div>
    );
  }
  const { temp = "-" } = main;
  const { description = "-", icon = "" } = weather[0];
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  const localTime = new Date(
    (dt + currentWeather.timezone) * 1000
  ).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="w-28 h-36 flex flex-col justify-start rounded-lg m-auto text-center bg-white">
      <p className="text-xl font-semibold">{localTime}</p>
      <img src={iconUrl} alt={description} className="w-20 mx-auto" />
      <p className="text-xl">{Math.floor(temp)}&deg;c</p>
    </div>
  );
};

export default HourlyCarousel;
