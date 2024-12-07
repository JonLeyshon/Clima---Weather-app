const LocationPredictionChild = ({ display_name, lat, lon, onSelect }) => {
  return (
    <>
      <p
        className="hover:bg-slate-200 cursor-pointer"
        onClick={() => onSelect(lat, lon)} // Pass lat and lon
      >
        {display_name}
      </p>
    </>
  );
};

export default LocationPredictionChild;
