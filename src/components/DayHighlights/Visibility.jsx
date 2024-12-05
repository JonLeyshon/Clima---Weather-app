import { useSelector } from "react-redux";
import { selectCurrentWeather } from "../../redux/currentWeatherSice";

const Visibility = () => {
  const weatherData = useSelector(selectCurrentWeather);
  const { visibility } = weatherData || 0;
  const visibilityInMiles = (visibility / 1609.344).toFixed(1);

  const calculateVisibility = (val) => {
    if (val <= 1.9) {
      return { desc: "Poor Visibility", path: "/img/png/emojis/bad.png" };
    } else if (val > 2 && val <= 3.1) {
      return { desc: "Average Visibility", path: "/img/png/emojis/ok.png" };
    } else if (val > 3.1 && val <= 6.2) {
      return { desc: "Good Visibility", path: "/img/png/emojis/good.png" };
    } else if (val > 6.2) {
      return {
        desc: "Excellent Visibility",
        path: "/img/png/emojis/perfect.png",
      };
    } else {
      return { desc: "Error", path: "/img/png/emojis/error.png" };
    }
  };

  return (
    <div className="highlightContainer">
      <h2 className="highlightTitle">Visibility</h2>
      <div className="flex items-end">
        <p className="text-6xl mr-2">{visibilityInMiles}</p>
        <p className="text-xl">miles</p>
      </div>
      <div className="flex items-center">
        <p className="text-xl mr-2">
          {calculateVisibility(visibilityInMiles).desc}
        </p>
        <img src={calculateVisibility(visibilityInMiles).path} alt="" />
      </div>
    </div>
  );
};

export default Visibility;
