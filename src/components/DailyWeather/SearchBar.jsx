import { useDispatch, useSelector } from "react-redux";
import { setLocationInput } from "../../redux/UserInputSlice";
import { useState } from "react";
import { setCoords } from "../../redux/UserInputSlice";
import Spinner from "../Utils/Spinner";
import LocationSearch from "./LocationSearch";
import { Tooltip } from "react-tooltip";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  //obtain the user's location using browser built in geolocation
  const getCurrentLocation = async () => {
    if (navigator.geolocation) {
      setLoading(true); // Start loading
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(setCoords({ lat: latitude, lon: longitude }));
          dispatch(setLocationInput(""));
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
          <LocationSearch />
          {loading ? (
            <Spinner />
          ) : (
            <>
              <Tooltip
                id="find-location-tooltip"
                content="Find your location"
              />
              <img
                src="/img/svg/find-me-icon.svg"
                alt="Find me"
                className="w-12 p-1 hover:bg-slate-200 rounded-full cursor-pointer"
                onClick={getCurrentLocation}
                data-tooltip-id="find-location-tooltip"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
