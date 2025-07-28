import { getWeatherIcon } from "../utils/helpers";

export const renderCurrentWeather = (data) => {
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

  const icon = document.createElement("img");
  icon.src = getWeatherIcon(data.currentConditions.icon);
  icon.alt = data.currentConditions.conditions;
  icon.className = "weather-icon";

  conditions.appendChild(icon);
  conditions.appendChild(conditionsText);
  weatherDetails.appendChild(temp);
  weatherDetails.appendChild(conditions);
  currentWeather.appendChild(heading);
  currentWeather.appendChild(weatherDetails);

  return currentWeather;
};
