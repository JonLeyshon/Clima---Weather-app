import { useDispatch } from "react-redux";
import { setLocationInput } from "../../redux/UserInputSlice";
import { useState } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchClick = () => {
    dispatch(setLocationInput(searchInput));
  };

  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      dispatch(setLocationInput(searchInput));
    }
  };

  return (
    <div className="searchBar p-4 ">
      {/* Search Input field */}
      <div className="w-full flex justify-center border-gray-500 border-2 rounded-md mr-1">
        {/* Search Icon */}
        <img
          src="/img/svg/search-icon.svg"
          alt="Search Icon"
          className="w-10"
          onClick={handleSearchClick}
        />
        <input
          type="text"
          className="w-11/12 p-2 rounded-lg"
          placeholder="Search for places..."
          onChange={handleSearchInput}
          onKeyDown={handleEnterKey}
        />
        {/* Obtain my location */}

        <img
          src="/img/svg/find-me-icon.svg"
          alt="Find me"
          className="w-12 p-1 bg-gray-200 rounded-full"
        />
      </div>
    </div>
  );
};

export default SearchBar;
