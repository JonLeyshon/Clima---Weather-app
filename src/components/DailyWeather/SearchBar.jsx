import { useDispatch, useSelector } from "react-redux";
import {
  selectLocationInput,
  setLocationInput,
} from "../../redux/UserInputSlice";
import { useEffect, useState } from "react";
import { fetchCoordsByCity } from "../Utils/GetDataFunctions";
import { setCoords } from "../../redux/UserInputSlice";
import Spinner from "../Utils/Spinner";
import LocationSearch from "./LocationSearch";

const SearchBar = () => {
  const dispatch = useDispatch();
  const locationSearch = useSelector(selectLocationInput);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  // const handleSearchClick = async () => {
  //   setLoading(true); // Start loading
  //   dispatch(setLocationInput(searchInput));
  //   await fetchAndDispatchCoords(); // Fetch coordinates
  //   setLoading(false); // Stop loading
  // };

  const handleEnterKey = async (e) => {
    if (e.key === "Enter") {
      setLoading(true); // Start loading
      dispatch(setLocationInput(searchInput));
      await fetchAndDispatchCoords(); // Fetch coordinates
      setLoading(false); // Stop loading
    }
  };

  const fetchAndDispatchCoords = async () => {
    const coordinates = await fetchCoordsByCity(locationSearch);
    if (coordinates) {
      dispatch(setCoords(coordinates));
    }
  };

  useEffect(() => {
    if (!locationSearch) return;
    fetchAndDispatchCoords();
  }, [locationSearch]);

  const getCurrentLocation = async () => {
    if (navigator.geolocation) {
      setLoading(true); // Start loading
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setCoords({ lat: latitude, lon: longitude }));
          dispatch(setLocationInput(""));
          setSearchInput("");
          setLoading(false); // Stop loading
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoading(false); // Stop loading on error
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <div className="searchBar m-auto w-fit ">
        <div className="min-w-[20rem] m-auto lg:m-0 flex justify-between items-center border-gray-300 bg-white border-2 rounded-md focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
          <LocationSearch handleEnterKey={handleEnterKey} />
          {loading ? (
            <Spinner /> // Show spinner when loading
          ) : (
            <img
              src="/img/svg/find-me-icon.svg"
              alt="Find me"
              className="w-12 p-1 hover:bg-slate-200 rounded-full cursor-pointer"
              onClick={getCurrentLocation}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
