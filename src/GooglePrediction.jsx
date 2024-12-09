import { useEffect, useState } from "react";
import debounce from "lodash.debounce"; // Import debounce from lodash
import { fetchLocationPredictions } from "./components/Utils/GetDataFunctions";
const GooglePrediction = () => {
  const [locationSearch, setLocationSearch] = useState(""); // Set initial value as empty string
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false); // To handle loading state

  const handlePredictions = debounce(async () => {
    if (locationSearch.length > 2) {
      setLoading(true);
      try {
        const res = await fetchLocationPredictions(locationSearch);

        // Check if res and res.data are valid before accessing length
        if (res && res.data && res.data.length > 0) {
          setOptions(res.data); // Set options with response data
        } else {
          setOptions([]); // If no results, clear the options
        }
      } catch (error) {
        console.error("Error fetching location predictions:", error);
        setOptions([]); // Clear options in case of an error
      }
      setLoading(false); // Hide loading state after response
    }
  }, 1000); // 500ms debounce delayM

  const handleSearchInput = (e) => {
    setLocationSearch(e.target.value);
  };

  useEffect(() => {
    handlePredictions(); // Trigger debounced function when locationSearch changes
  }, [locationSearch]);

  return (
    <>
      <div>
        <input
          type="text"
          className="bg-slate-300"
          value={locationSearch}
          onChange={handleSearchInput}
          placeholder="Search for a location"
        />
        {loading && <p>Loading...</p>} {/* Display loading text */}
        <ul>
          {options &&
            options.map((res, index) => (
              <li key={index}>{res.display_name}</li> // Display location name
            ))}
        </ul>
      </div>

      {/* Optionally, a search button, but it’s not needed with live suggestions */}
      {/* <button onClick={handlePredictions}>Search</button> */}
    </>
  );
};

export default GooglePrediction;
