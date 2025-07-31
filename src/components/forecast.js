import { getWeatherIcon } from "../utils/helpers";
import {
  convertTemp,
  convertSpeed,
  getTemperatureUnitSymbol,
  getSpeedUnit,
} from "../utils/units";

export const renderForecast = (data) => {
  if (!data.days || data.days.length === 0) return null;

  const forecastSection = document.createElement("div");
  forecastSection.className = "forecast-section";

  const forecastHeading = document.createElement("h3");
  forecastHeading.textContent = "Next days";
  forecastSection.appendChild(forecastHeading);

  const forecastContainer = document.createElement("div");
  forecastContainer.className = "forecast-container";

  // Limit to 10 days (or available days if less than 10)
  const daysToShow = data.days.slice(0, 10);

  daysToShow.forEach((day) => {
    const forecastDay = document.createElement("div");
    forecastDay.className = "forecast-day";

    const date = new Date(day.datetime);
    const dayName = date.toLocaleDateString([], { weekday: "short" });
    const dayNumber = date.getDate();

    const dayHeader = document.createElement("div");
    dayHeader.className = "day-header";
    dayHeader.innerHTML = `
      <span class="day-name">${dayName}</span>
      <span class="day-number">${dayNumber}</span>
    `;

    const dayIcon = document.createElement("img");
    dayIcon.src = getWeatherIcon(day.icon);
    dayIcon.alt = day.conditions;
    dayIcon.className = "forecast-icon";

    const dayTemp = document.createElement("div");
    dayTemp.className = "day-temp";
    dayTemp.innerHTML = `
      <span class="temp-max">${convertTemp(day.tempmax)}${getTemperatureUnitSymbol()}</span>
      <span class="temp-min">${convertTemp(day.tempmin)}${getTemperatureUnitSymbol()}</span>
    `;

    const dayDetails = document.createElement("div");
    dayDetails.className = "day-details";
    dayDetails.innerHTML = `
      <div class="precip">Precip. ${day.precip} mm</div>
      <div class="humidity">Humidity ${day.humidity}%</div>
      <div class="wind">Wind ${convertSpeed(day.windspeed)} ${getSpeedUnit()}</div>
    `;

    forecastDay.appendChild(dayHeader);
    forecastDay.appendChild(dayIcon);
    forecastDay.appendChild(dayTemp);
    forecastDay.appendChild(dayDetails);
    forecastContainer.appendChild(forecastDay);
  });

  forecastSection.appendChild(forecastContainer);
  return forecastSection;
};
