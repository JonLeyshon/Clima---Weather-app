const SearchBar = () => {
  return (
    <div className="searchBar p-4 ">
      {/* Search Icon */}
      <div></div>
      {/* Search Input field */}
      <div className="w-full flex justify-center border-gray-500 border-2 rounded-md mr-1">
        <input
          type="text"
          className="w-11/12 p-2 rounded-lg"
          placeholder="Search for places..."
        />
        <img
          src="/img/svg/search-icon.svg"
          alt="Search Icon"
          className="w-10"
        />
      </div>
      {/* Obtain my location */}
      <div>
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
