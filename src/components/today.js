import { formatTime, createDetailItem } from "../utils/helpers";
import {
  convertTemp,
  convertSpeed,
  getTemperatureUnitSymbol,
  getSpeedUnit,
} from "../utils/units";

// Helper function to safely add a detail item if the value exists
const addDetailIfAvailable = (grid, label, value, unit = "", round = false) => {
  if (value !== undefined && value !== null) {
    const displayValue = round ? Math.round(value) : value;
    grid.appendChild(createDetailItem(label, displayValue, unit));
  }
};

export const renderTodayDetails = (data) => {
  const todaySection = document.createElement("div");
  todaySection.className = "today-section";

  const todayHeading = document.createElement("h3");
  todayHeading.textContent = "Today";
  todaySection.appendChild(todayHeading);

  const detailsGrid = document.createElement("div");
  detailsGrid.className = "details-grid";

  const current = data.currentConditions;
  const todayForecast = data.days && data.days[0] ? data.days[0] : null;

  addDetailIfAvailable(
    detailsGrid,
    "Feels Like",
    convertTemp(current.feelslike),
    getTemperatureUnitSymbol(),
    true,
  );
  addDetailIfAvailable(detailsGrid, "Humidity", current.humidity, "%");
  addDetailIfAvailable(
    detailsGrid,
    "High",
    convertTemp(todayForecast.tempmax),
    getTemperatureUnitSymbol(),
    true,
  );
  addDetailIfAvailable(
    detailsGrid,
    "Low",
    convertTemp(todayForecast.tempmin),
    getTemperatureUnitSymbol(),
    true,
  );
  addDetailIfAvailable(
    detailsGrid,
    "Wind Speed",
    convertSpeed(current.windspeed),
    getSpeedUnit(),
    true,
  );
  addDetailIfAvailable(detailsGrid, "Wind Direction", current.winddir, "°");
  addDetailIfAvailable(detailsGrid, "Pressure", current.pressure, " hPa", true);
  addDetailIfAvailable(detailsGrid, "UV Index", current.uvindex);
  addDetailIfAvailable(detailsGrid, "Cloud Cover", current.cloudcover, "%");
  addDetailIfAvailable(
    detailsGrid,
    "Dew",
    convertTemp(current.dew),
    getTemperatureUnitSymbol(),
    true
  );

  if (todayForecast) {
    if (todayForecast.description) {
      const descriptionContainer = document.createElement("div");
      descriptionContainer.className = "day-description";
      descriptionContainer.textContent = todayForecast.description;
      todaySection.appendChild(descriptionContainer);
    }
  }

  todaySection.appendChild(detailsGrid);

  // Sunrise / Sunset
  if (current.sunrise && current.sunset) {
    const sunTimes = document.createElement("div");
    sunTimes.className = "sun-times";

    sunTimes.appendChild(
      createDetailItem("Sunrise", formatTime(current.sunrise)),
    );
    sunTimes.appendChild(
      createDetailItem("Sunset", formatTime(current.sunset)),
    );
    todaySection.appendChild(sunTimes);
  }

  return todaySection;
};
