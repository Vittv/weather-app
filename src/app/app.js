import { getAPIData } from "../services/weather";

export const init = (container) => {
  container.innerHTML = "";

  const weatherApp = document.createElement("div");
  weatherApp.className = "weather-app";
  container.appendChild(weatherApp);

  const searchForm = document.createElement("form");
  searchForm.className = "search-form";

  const cityInput = document.createElement("input");
  cityInput.type = "text";
  cityInput.className = "city-input";
  cityInput.placeholder = "Enter city";

  const searchButton = document.createElement("button");
  searchButton.type = "submit";
  searchButton.textContent = "Search";

  searchForm.appendChild(cityInput);
  searchForm.appendChild(searchButton);
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
  container.innerHTML = '<div class="loading">Loading weather data...</div>';

  try {
    const data = await getAPIData(city);

    if (data.error) {
      container.innerHTML = `<div class="error">${data.error}</div>`;
      return;
    }

    renderWeather(data, container);
  } catch (error) {
    container.innerHTML = `<div class="error">Failed to load weather data</div>`;
    console.error("Error loading weather:", error);
  }
};

const renderWeather = (data, container) => {
  const currentWeather = document.createElement("div");
  currentWeather.className = "current-weather";

  const heading = document.createElement("h2");
  heading.textContent = `${data.resolvedAddress}`;

  const weatherDetails = document.createElement("div");
  weatherDetails.className = "weather-details";

  const temp = document.createElement("div");
  temp.className = "temp";
  temp.textContent = `${Math.round(data.currentConditions.temp)}°C`;

  const conditions = document.createElement("div");
  conditions.className = "conditions";

  const conditionsText = document.createElement("span");
  conditionsText.textContent = data.currentConditions.conditions;

  conditions.appendChild(conditionsText);
  weatherDetails.appendChild(temp);
  weatherDetails.appendChild(conditions);
  currentWeather.appendChild(heading);
  currentWeather.appendChild(weatherDetails);

  container.innerHTML = "";
  container.appendChild(currentWeather);
};
