import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchLocationPredictions } from "../Utils/GetDataFunctions";
import LocationPredictionChild from "./LocationPredictionChild";
import { setCoords } from "../../redux/UserInputSlice";
import useDebounce from "../Utils/useDebounce";

const LocationSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [predictions, setPredictions] = useState([]);
  const dispatch = useDispatch();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const handlePredictions = async () => {
      if (debouncedSearchTerm.length > 2) {
        try {
          const res = await fetchLocationPredictions(debouncedSearchTerm);
          setPredictions(res);
        } catch (error) {
          console.error("Failed to fetch predictions:", error);
        }
      } else {
        setPredictions([]);
      }
    };

    handlePredictions();
  }, [debouncedSearchTerm]);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSelection = (lat, lon) => {
    setSearchTerm("");
    setPredictions([{ display_name: "Loading..." }]);
    dispatch(setCoords({ lat, lon }));
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
        className="p-2 rounded-lg focus:outline-none w-full"
      />
      <ul className="absolute top-12 left-0 w-80 bg-white shadow-lg z-10">
        {debouncedSearchTerm.length > 2 ? (
          predictions.length > 0 ? (
            predictions.map((result, index) => (
              <li key={index} className="hover:bg-gray-100 cursor-pointer">
                <LocationPredictionChild
                  {...result}
                  onSelect={handleSelection}
                />
              </li>
            ))
          ) : (
            <li className="text-gray-500 p-2">
              No results. Try another search.
            </li>
          )
        ) : null}
      </ul>
    </div>
  );
};

export default LocationSearch;
