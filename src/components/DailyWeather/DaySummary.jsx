import { useSelector } from "react-redux";
import { selectCurrentWeather } from "../../redux/currentWeatherSice";

const DaySummary = () => {
  const weatherData = useSelector(selectCurrentWeather);
  const {
    dt = 0,
    main = {},
    sys = {},
    timezone = 0,
    weather = [{}],
    wind = {},
    rain = {},
  } = weatherData || {};

  const localUnixTime = dt + timezone;
  const localDate = new Date(localUnixTime * 1000);

  const options = { weekday: "long", hour: "2-digit", minute: "2-digit" };
  const dayName = localDate.toLocaleString("en-US", { weekday: "long" });
  const time = localDate.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="p-10 text-center">
      <div className="temp">
        <p className="text-7xl font-extralight pb-6">
          {Math.floor(main.temp)}&deg;c
        </p>
      </div>
      <div className="day">
        <p className="mr-2">{dayName}</p>
        <p className="text-gray-400">{time}</p>
      </div>
      <div className="desc">
        <div className="weather">
          <p className="text-xl">{weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default DaySummary;
