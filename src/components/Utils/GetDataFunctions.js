import axios from "axios";
const openWeatherMapApiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const weatherStackApiKey = process.env.REACT_APP_WEATHER_STACK_API_KEY;

export const fetchCoordsByCity = async (city) => {
  try {
    const res =
      await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${openWeatherMapApiKey}
        `);
    return { lat: res.data[0].lat, lon: res.data[0].lon };
  } catch (error) {
    console.error("Error fetching coords", error);
  }
};

export const fetchCurrentWeatherData = async (lat, lon) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherMapApiKey}&units=metric`
    );
    return res.data;
  } catch (error) {
    console.log("error with API retreival:", error);
  }
};

export const fetchThreeHourlyWeather = async (lat, lon) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openWeatherMapApiKey}&units=metric`
    );
    const weatherArray = res.data.list.slice(0, 7);
    return weatherArray;
  } catch (error) {
    console.log("error with API retreival:", error);
  }
};

export const fetchDailyWeather = async (lat, lon) => {
  try {
    const res = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=${weatherStackApiKey}&q=${lat},${lon}&days=7`
    );
    return res.data.forecast.forecastday; // Daily weather for 7 days
  } catch (error) {
    console.log("error with API retreival:", error);
  }
};

export const fetchUvIndex = async (lat, lon) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${openWeatherMapApiKey}`
    );

    // Return the UV Index data
    if (res.data.value > 12) {
      return 12;
    }
    return Math.floor(res.data.value);
  } catch (error) {
    console.error("Error fetching UV Index:", error);
    return null;
  }
};

export const fetchLocationPredictions = async (query) => {
  const apiKey = process.env.REACT_APP_LOCATIONIQ_API_KEY;

  if (!query) return [];

  try {
    const response = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${query}&format=json`
    );

    // Return the first 5 suggestions (you can adjust this as needed)
    return response.data.slice(0, 5); // Assuming response.data is an array of location suggestions
  } catch (error) {
    console.error("Error fetching location predictions:", error);
    return [];
  }
};
