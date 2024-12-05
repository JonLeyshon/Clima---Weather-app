import { useSelector } from "react-redux";
import { selectCurrentWeather } from "../../redux/currentWeatherSice";
import ProgressBar from "@ramonak/react-progress-bar";

const Humidity = () => {
  const weatherData = useSelector(selectCurrentWeather);
  const { humidity } = weatherData?.main || 0;
  const calculateHumidityCondition = (val) => {
    if (val <= 30) {
      return { desc: "Low", path: "/img/png/emojis/perfect.png" };
    } else if (val > 30 && val <= 60) {
      return { desc: "Medium", path: "/img/png/emojis/good.png" };
    } else if (val > 60 && val <= 85) {
      return { desc: "High", path: "/img/png/emojis/ok.png" };
    } else if (val > 85 && val <= 100) {
      return { desc: "Very High", path: "/img/png/emojis/bad.png" };
    } else {
      return { desc: "Error", path: "/img/png/emojis/error.png" };
    }
  };

  return (
    <div className="highlightContainer">
      <h2 className="highlightTitle">Humidity</h2>
      <div>
        <div className="flex mb-4">
          <p className="text-6xl mr-2">{humidity}</p>
          <p className="text-2xl">&#37;</p>
        </div>
        <div>
          <ProgressBar completed={humidity} customLabel=" " width="100px" />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-xl mr-2">
          {calculateHumidityCondition(humidity).desc}
        </p>
        <img src={calculateHumidityCondition(humidity).path} alt="" />
      </div>
    </div>
  );
};

export default Humidity;
