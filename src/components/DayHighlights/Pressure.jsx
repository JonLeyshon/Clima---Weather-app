import { useSelector } from "react-redux";
import { selectCurrentWeather } from "../../redux/currentWeatherSice";
import ProgressBar from "@ramonak/react-progress-bar";

const Pressure = () => {
  const weatherData = useSelector(selectCurrentWeather);
  const { pressure } = weatherData?.main || 1013;

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
      <div className="mb-4 flex flex-col justify-center items-center">
        <div className="flex mb-4">
          <p className="text-6xl mr-2">{pressure}</p>
          <p className="text-2xl">hPa</p>
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
        <p className="text-xl">{calculatePressureCondition(pressure)}</p>
      </div>
    </div>
  );
};

export default Pressure;
