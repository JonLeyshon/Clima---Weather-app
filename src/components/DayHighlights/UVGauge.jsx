import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUvIndex } from "../Utils/GetDataFunctions";
import { selectCoords, selectLocationInput } from "../../redux/UserInputSlice";
import ProgressBar from "react-customizable-progressbar";

const UVGuage = () => {
  const locationSearch = useSelector(selectLocationInput);
  const coords = useSelector(selectCoords);
  const [uvData, setUvData] = useState(0);
  const [radius, setRadius] = useState(50); // Initial radius

  // Update UV data everytime coords change
  useEffect(() => {
    const getUvData = async () => {
      const res = await fetchUvIndex(coords.lat, coords.lon);
      setUvData(res);
    };
    getUvData();
  }, [coords]);

  // Update radius when the window changes width
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth >= 1024) {
        // 'lg' breakpoint in Tailwind
        setRadius(90); // Set radius to 100 for large screens
      } else if (window.innerWidth >= 768) {
        // 'md' breakpoint in Tailwind
        setRadius(70); // Set radius to 70 for medium screens
      } else {
        setRadius(50); // Set radius to 50 for smaller screens
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", updateRadius);
    };
  }, []);

  return (
    <>
      <div className="highlightContainer">
        <h4 className="highlightTitle">UV Index</h4>
        <ProgressBar
          radius={radius} // Dynamically set radius based on screen width
          progress={uvData}
          steps={12}
          cut={180}
          rotate={-180}
          fillColor="#ffffff"
          strokeWidth={28}
          strokeColor="#ffce54"
          strokeLinecap="butt"
          trackStrokeWidth={14}
          trackStrokeLinecap="butt"
          pointerRadius={8}
          pointerStrokeColor="#ffce54"
        />
        <p className="highlightMain absolute pt-10">{uvData}</p>
      </div>
    </>
  );
};

export default UVGuage;
