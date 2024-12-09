**CLIMA **
Your All-In-One Weather Companion for Every Day.

Overview
Sleek Weather Explorer is a modern and feature-rich weather app designed to provide comprehensive weather insights with style. Built with cutting-edge tools, it delivers detailed daily highlights, including UV index, humidity, sunrise and sunset times, and much more. The app dynamically adjusts its layout for an exceptional user experience on both phones and PCs, complemented by animated weather icons for added flair.

Features
Comprehensive Weather Data:
Current temperature, UV index, humidity, wind speed, and more.
Sunrise and sunset times to plan your day better.
Geolocation Support: Automatically detects your location using native geolocation.
Search Capability: Search weather details for any city or region.
Dynamic Design:
Built with React and Tailwind CSS for a sleek, responsive design.
Adaptive layouts ensure a seamless experience across devices.
Weather Visualization: Animated weather icons provide a visually engaging experience.
API Integration: Combines data from multiple APIs for accuracy and versatility:
OpenWeatherMap for weather data.
LocationIQ for geocoding and location search.
Weatherstack for additional weather details.
Tech Stack
Frontend
React: For building a dynamic and interactive user interface.
Tailwind CSS: For modern, responsive, and customizable design.
React Router: For seamless navigation.
Icons and Animations: Weather animations using Lottie or CSS for smooth visuals.
APIs
OpenWeatherMap: Current and forecast weather data.
LocationIQ: Geocoding and location services.
Weatherstack: Additional weather insights for enhanced user experience.
Deployment
Hosted on hostpresto.

**Installation and Setup**
Follow these steps to set up and run the project locally:

Prerequisites
Node.js (v16+ recommended) and npm or yarn installed.
API keys from the following services:
OpenWeatherMap
Weatherstack
LocationIQ
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/sleek-weather-explorer.git  
cd sleek-weather-explorer  
Install the dependencies:

bash
Copy code
npm install  
Create a .env file in the root of the project directory and add your API keys:

env
Copy code
REACT_APP_OPEN_WEATHER_API_KEY=your_openweather_api_key  
REACT_APP_WEATHER_STACK_API_KEY=your_weatherstack_api_key  
REACT_APP_LOCATIONIQ_API_KEY=your_locationiq_api_key  
Start the development server:

bash
Copy code
npm start  
Open your browser and navigate to http://localhost:3000.

Usage
Allow location permissions for automatic weather detection.
Use the search bar to find weather data for specific locations.
Explore detailed daily highlights, including UV index, humidity, and sunrise/sunset times
