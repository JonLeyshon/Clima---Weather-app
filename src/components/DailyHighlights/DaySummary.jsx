const DaySummary = ({ weatherData }) => {
  const {
    dt = 0,
    main = {},
    sys = {},
    timezone = 0,
    weather = [{}],
    wind = {},
    rain = {},
  } = weatherData || {};
  console.log(weatherData);

  return (
    <div className="p-10">
      <div className="temp">
        <p className="text-8xl"> {Math.floor(main.temp)}&deg;C</p>
      </div>
      <div className="day flex ">
        <p className="mr-2"> Monday</p>
        <p>Time</p>
      </div>
      <div className="desc">
        <div className="weather">
          <p>{weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default DaySummary;
