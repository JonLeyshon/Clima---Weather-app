import { useSelector } from "react-redux";
import { selectCurrentWeather } from "../../redux/currentWeatherSice";

const WindStatus = () => {
  const weatherData = useSelector(selectCurrentWeather);
  const { speed, deg } = weatherData?.wind || {};

  //return the wind direction based on degree from api
  const getWindDirection = (deg) => {
    const directions = [
      "North",
      "North East",
      "East",
      "South East",
      "South",
      "South West",
      "West",
      "North West",
    ];
    const index = Math.round(deg / 45) % 8;
    return directions[index];
  };

  const speedInMph = (speed * 2.23694).toFixed(2);

  return (
    <div className="highlightContainer">
      <h2 className="highlightTitle">Wind Status</h2>
      <div className="flex items-end ">
        <p className="highlightMain mr-2">{speedInMph}</p>
        <p className="highlightSub"> mph</p>
      </div>
      <div className="flex items-end">
        <img
          src="/img/png/compass.png"
          alt="wind direction"
          className="w-6 mr-2"
        />
        <p className="highlightSmall">{getWindDirection(deg)}</p>
      </div>
    </div>
  );
};

export default WindStatus;
