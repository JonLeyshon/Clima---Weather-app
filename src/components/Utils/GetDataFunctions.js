import axios from "axios";
const openWeatherMapApiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const weatherStackApiKey = process.env.REACT_APP_WEATHER_STACK_API_KEY;

//Obtain current weather for daily card and daily highlights from openweathermap api
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

//Obtain weather for the next seven updates of weather.
// As the Openweatherapi returns 5 days, this reduces the results array to 7 to improve consistency.
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

//Obtain weather for daily, as the openweatherapi doesn't offer daily weather on a free subscription, I have used weather stack.
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

//Obtain the UV index, this is not included in the current weather call.
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

//Autofill to help searching from LocationIQ Api

export const fetchLocationPredictions = async (query) => {
  const apiKey = process.env.REACT_APP_LOCATIONIQ_API_KEY;

  if (!query) return [];

  try {
    const response = await axios.get(
      `https://us1.locationiq.com/v1/search.php?key=${apiKey}&q=${query}&format=json`
    );

    // Return the first 5 suggestions
    return response.data.slice(0, 5);
  } catch (error) {
    console.error("Error fetching location predictions:", error);
    return [];
  }
};
