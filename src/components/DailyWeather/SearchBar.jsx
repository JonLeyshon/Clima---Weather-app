import { useDispatch, useSelector } from "react-redux";
import {
  selectLocationInput,
  setLocationInput,
} from "../../redux/UserInputSlice";
import { useEffect, useState } from "react";
import { fetchCoordsByCity } from "../Utils/GetDataFunctions";
import { setCoords } from "../../redux/UserInputSlice";
import Spinner from "../Utils/Spinner";

const SearchBar = () => {
  const dispatch = useDispatch();
  const locationSearch = useSelector(selectLocationInput);
  const [searchInput, setSearchInput] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false); // Loading for search
  const [loadingLocation, setLoadingLocation] = useState(false); // Loading for location

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = async () => {
    setLoadingSearch(true); // Start search loading
    dispatch(setLocationInput(searchInput));
    await fetchAndDispatchCoords(); // Fetch coordinates
    setLoadingSearch(false); // Stop search loading
  };

  const handleEnterKey = async (e) => {
    if (e.key === "Enter") {
      setLoadingSearch(true); // Start search loading
      dispatch(setLocationInput(searchInput));
      await fetchAndDispatchCoords(); // Fetch coordinates
      setLoadingSearch(false); // Stop search loading
    }
  };

  const fetchAndDispatchCoords = async () => {
    const coordinates = await fetchCoordsByCity(locationSearch);
    console.log(coordinates);
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
      setLoadingLocation(true); // Start location loading
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setCoords({ lat: latitude, lon: longitude }));
          dispatch(setLocationInput(""));
          setSearchInput("");
          setLoadingLocation(false); // Stop location loading
        },
        (error) => {
          console.error("Error getting location:", error);
          setLoadingLocation(false); // Stop location loading on error
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="searchBar p-4 m-auto">
      <div className="w-80 m-auto lg:m-0 flex justify-center items-center border-gray-300 bg-white border-2 rounded-md focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200">
        {/* Show spinner or search icon */}
        {loadingSearch ? (
          <Spinner />
        ) : (
          <img
            src="/img/svg/search-icon.svg"
            alt="Search Icon"
            className="w-12 p-1 hover:bg-slate-200 rounded-full cursor-pointer"
            onClick={handleSearchClick}
          />
        )}
        <input
          type="text"
          className="p-2 rounded-lg focus:outline-none w-full"
          placeholder="Search for places..."
          onChange={handleSearchInput}
          onKeyDown={handleEnterKey}
          value={searchInput}
        />
        {/* Show spinner or location icon */}
        {loadingLocation ? (
          <Spinner />
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
  );
};

export default SearchBar;
