import Humidity from "./DayHighlights/Humidity";
import Pressure from "./DayHighlights/Pressure";
import Sunrise from "./DayHighlights/Sunrise";
import UVGuage from "./DayHighlights/UVGauge";
import Visibility from "./DayHighlights/Visibility";
import WindStatus from "./DayHighlights/WindStatus";

const DailyHighlights = () => {
  return (
    <div>
      <div className="text-center xl:text-left text-2xl pb-4 bg-gray-50">
        <h2>Today's Highlights</h2>
      </div>
      <div className="grid grid-cols-1ahsa md:grid-cols-2 xl:grid-cols-3 gap-2 bg-gray-50">
        <UVGuage />
        <WindStatus />
        <Sunrise />
        <Humidity />
        <Visibility />
        <Pressure />
      </div>
    </div>
  );
};

export default DailyHighlights;
