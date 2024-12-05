import { useSelector } from "react-redux";
import { selectCurrentWeather } from "../../redux/currentWeatherSice";

const Sunrise = () => {
  const weatherData = useSelector(selectCurrentWeather);
  const { sunrise, sunset } = weatherData?.sys || 0;
  const { timezone } = weatherData || 0;

  const calculateTime = (dt) => {
    const localUnixTime = dt + timezone;
    const date = new Date(localUnixTime * 1000);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="highlightContainer">
      <h2 className="highlightTitle">Sunrise & Sunset </h2>
      <div className="flex items-center">
        <div className="gradientButton mr-2">
          <img
            src="/img/svg/arrowUp.svg"
            alt="arrow up"
            className="arrowIcon"
          />
        </div>
        <p className="text-xl">{calculateTime(sunrise)}</p>
      </div>
      <div className="flex items-center">
        <div className="gradientButton mr-2">
          <img
            src="/img/svg/arrowDown.svg"
            alt="arrow up"
            className="arrowIcon"
          />
        </div>
        <p className="text-xl">{calculateTime(sunset)}</p>
      </div>
    </div>
  );
};

export default Sunrise;
