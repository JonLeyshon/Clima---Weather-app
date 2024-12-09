import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLocationInput,
  setTimeLineSelection,
} from "../redux/UserInputSlice";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "./Utils/carouselResponsiveness";
import DailyCarousel from "./Timeline/DailyCarousel";
import HourlyCarousel from "./Timeline/HourlyCarousel";
import { selectTimelineWeather } from "../redux/timelineWeatherSlice";

const TimeLine = () => {
  const [selection, setSelection] = useState("Week");
  const timeLineWeather = useSelector(selectTimelineWeather);
  const locationSearch = useSelector(selectLocationInput);
  const dispatch = useDispatch();

  const handleSelectionClickAndDispatch = (val) => {
    setSelection(val);
    dispatch(setTimeLineSelection(val));
  };

  return (
    <div className="pb-6 bg-slate-50">
      <div className="flex justify-center xl:justify-start text-2xl pb-6">
        <p
          className={`mr-2 cursor-pointer ${
            selection === "Today" ? "text-black underline" : "text-slate-400"
          }`}
          onClick={() => handleSelectionClickAndDispatch("Today")}
        >
          Today
        </p>
        <p
          className={` cursor-pointer ${
            selection === "Week" ? "text-black underline" : "text-slate-400"
          }`}
          onClick={() => handleSelectionClickAndDispatch("Week")}
        >
          Week
        </p>
      </div>

      <div className="">
        {/* Map over timelineWeather and return elements */}
        {timeLineWeather.length > 0 && (
          <Carousel responsive={responsive}>
            {timeLineWeather.map((item, index) => {
              if (selection === "Week") {
                return <DailyCarousel key={index} {...item} />;
              } else if (selection === "Today") {
                return <HourlyCarousel key={index} {...item} />;
              }
              return null;
            })}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default TimeLine;
