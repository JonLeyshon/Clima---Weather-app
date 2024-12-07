import { useSelector } from "react-redux";
import { selectCurrentWeather } from "../../redux/currentWeatherSice";
import ProgressBar from "@ramonak/react-progress-bar";

const Pressure = () => {
  const weatherData = useSelector(selectCurrentWeather);
  const { pressure } = weatherData?.main || 1013;

  //return text for pressure condition
  const calculatePressureCondition = (val) => {
    if (val < 1010) {
      return "Low";
    } else if (val >= 1010 && val <= 1020) {
      return "Normal";
    } else {
      return "High";
    }
  };

  return (
    <div className="highlightContainer">
      <h2 className="highlightTitle">Pressure</h2>
      <div className=" flex flex-col justify-center items-center">
        <div className="flex">
          <p className="highlightMain mr-2">{pressure}</p>
          <p className="highlightSub">hPa</p>
        </div>
        <div>
          <ProgressBar
            completed={((pressure - 980) / 40) * 100}
            customLabel=" "
            width="100px"
          />
        </div>
      </div>
      <div>
        <p className="highlightSub">{calculatePressureCondition(pressure)}</p>
      </div>
    </div>
  );
};

export default Pressure;
