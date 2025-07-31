import { getWeatherIcon } from "../utils/helpers";
import { convertTemp, getTemperatureUnitSymbol } from "../utils/units";

export const renderCurrentWeather = (data) => {
  const currentWeather = document.createElement("div");
  currentWeather.className = "current-weather";

  const locationText = document.createElement("div");
  locationText.className = "location-text";
  locationText.textContent = `${data.resolvedAddress}`;
  currentWeather.appendChild(locationText);

  const weatherDetails = document.createElement("div");
  weatherDetails.className = "weather-details";

  const temp = document.createElement("div");
  temp.className = "temp";
  temp.textContent = `${convertTemp(data.currentConditions.temp)}${getTemperatureUnitSymbol()}`;
  const icon = document.createElement("img");
  icon.src = getWeatherIcon(data.currentConditions.icon);
  icon.alt = data.currentConditions.conditions;
  icon.className = "weather-icon";

  weatherDetails.appendChild(temp);
  weatherDetails.appendChild(icon);
  currentWeather.appendChild(weatherDetails);

  const conditions = document.createElement("div");
  conditions.className = "conditions";
  conditions.textContent = data.currentConditions.conditions;
  currentWeather.appendChild(conditions);

  return currentWeather;
};
