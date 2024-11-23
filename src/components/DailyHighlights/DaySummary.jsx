const DaySummary = () => {
  return (
    <div>
      <div className="temp">
        <p> 12 &deg; C</p>
      </div>
      <div className="day">
        <p> Monday</p>
        <p>Time</p>
      </div>
      <div className="desc">
        <div className="weather">
          <p>Mostly Cloudy</p>
        </div>
        <div className="prescip">
          <p>Rain</p>
        </div>
      </div>
    </div>
  );
};

export default DaySummary;
