import { formatTime, createDetailItem } from "../utils/helpers";

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
    current.feelslike,
    "°C",
    true,
  );
  addDetailIfAvailable(detailsGrid, "Humidity", current.humidity, "%");
  addDetailIfAvailable(detailsGrid, "High", todayForecast.tempmax, "°C", true);
  addDetailIfAvailable(detailsGrid, "Low", todayForecast.tempmin, "°C", true);
  addDetailIfAvailable(
    detailsGrid,
    "Wind Speed",
    current.windspeed,
    " km/h",
    true,
  );
  addDetailIfAvailable(detailsGrid, "Wind Direction", current.winddir, "°");
  addDetailIfAvailable(detailsGrid, "Pressure", current.pressure, " hPa", true);
  addDetailIfAvailable(detailsGrid, "UV Index", current.uvindex);
  addDetailIfAvailable(detailsGrid, "Cloud Cover", current.cloudcover, "%");

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
