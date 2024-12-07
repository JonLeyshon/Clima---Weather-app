import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUvIndex } from "../Utils/GetDataFunctions";
import { selectCoords, selectLocationInput } from "../../redux/UserInputSlice";
import ProgressBar from "react-customizable-progressbar";

const UVGuage = () => {
  const locationSearch = useSelector(selectLocationInput);
  const coords = useSelector(selectCoords);
  const [uvData, setUvData] = useState(0);
  useEffect(() => {
    const getUvData = async () => {
      const res = await fetchUvIndex(coords.lat, coords.lon);
      setUvData(res);
    };
    getUvData();
  }, [coords]);

  return (
    <>
      <div className="highlightContainer">
        <h4 className="highlightTitle">UV Index</h4>
        <ProgressBar
          radius={100}
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
        <p className="text-5xl absolute pt-10">{uvData}</p>
      </div>
    </>
  );
};

export default UVGuage;
