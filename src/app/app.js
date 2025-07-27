import { getAPIData } from "../services/weather";
import { createSearchForm } from "../components/search";
import { renderWeather } from "./display";

export const init = (container) => {
  container.innerHTML = "";

  const weatherApp = document.createElement("div");
  weatherApp.className = "weather-app";
  container.appendChild(weatherApp);

  const { searchForm, cityInput } = createSearchForm();
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

const loadWeatherData = async (city, container) => {
  container.innerHTML = `<div class="loading">Loading weather data...</div>`;

  try {
    const data = await getAPIData(city);

    if (data.error) {
      container.innerHTML = `<div class="error">${data.error}</div>`;
      return;
    }

    console.log(data);
    renderWeather(data, container);
  } catch (error) {
    container.innerHTML = `<div class="error">Failed to load weather data</div>`;
    console.error("Error loading weather:", error);
  }
};
