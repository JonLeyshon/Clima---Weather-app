import axios from "axios";
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

export const fetchCurrentWeatherData = async (city) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    return res.data;
  } catch (error) {
    console.log("error with API retreival:", error);
  }
};
