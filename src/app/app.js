import { getAPIData } from "../services/weather";
import { createSearchForm } from "../components/search";
import { renderWeather } from "./display";

// A variable to hold the weather data so it can be accessed later
let currentWeatherData = null;
let currentWeatherContainer = null;

// This function will be called to re-render the UI
// after a unit toggle or a new city search.
const renderAllWeatherComponents = () => {
  if (currentWeatherData && currentWeatherContainer) {
    renderWeather(currentWeatherData, currentWeatherContainer);
  }
};

const loadWeatherData = async (city, container) => {
  container.innerHTML = `<div class="loading">Loading weather data...</div>`;
  currentWeatherContainer = container; // Store the container for later use

  try {
    const data = await getAPIData(city);

    if (data.error) {
      container.innerHTML = `<div class="error">${data.error}</div>`;
      return;
    }

    console.log(data);
    currentWeatherData = data; // Store the fetched data
    renderAllWeatherComponents(); // Call the unified render function
  } catch (error) {
    container.innerHTML = `<div class="error">Failed to load weather data</div>`;
    console.error("Error loading weather:", error);
  }
};

export const init = (container) => {
  container.innerHTML = "";

  const weatherApp = document.createElement("div");
  weatherApp.className = "weather-app";
  container.appendChild(weatherApp);

  // Pass the re-render function to the search form
  const { searchForm, cityInput } = createSearchForm(
    renderAllWeatherComponents,
  );
  weatherApp.appendChild(searchForm);

  const weatherContainer = document.createElement("div");
  weatherContainer.className = "weather-container";
  weatherApp.appendChild(weatherContainer);

  // Load Paris weather by default
  loadWeatherData("Paris", weatherContainer);

  // City search form submission
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
      loadWeatherData(city, weatherContainer);
    }
    cityInput.value = "";
  });
};
