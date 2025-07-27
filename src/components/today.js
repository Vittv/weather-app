import { formatTime, createDetailItem } from "../utils/helpers";

export const renderTodayDetails = (data) => {
  const todaySection = document.createElement("div");
  todaySection.className = "today-section";

  const todayHeading = document.createElement("h3");
  todayHeading.textContent = "Today's Details";
  todaySection.appendChild(todayHeading);

  const detailsGrid = document.createElement("div");
  detailsGrid.className = "details-grid";

  // Weather details
  detailsGrid.appendChild(
    createDetailItem(
      "Feels Like",
      Math.round(data.currentConditions.feelslike),
      "°C",
    ),
  );
  detailsGrid.appendChild(
    createDetailItem("Humidity", data.currentConditions.humidity, "%"),
  );
  detailsGrid.appendChild(
    createDetailItem(
      "Wind Speed",
      Math.round(data.currentConditions.windspeed),
      " km/h",
    ),
  );
  detailsGrid.appendChild(
    createDetailItem("Wind Direction", data.currentConditions.winddir, "°"),
  );
  detailsGrid.appendChild(
    createDetailItem(
      "Pressure",
      Math.round(data.currentConditions.pressure),
      " hPa",
    ),
  );
  detailsGrid.appendChild(
    createDetailItem("UV Index", data.currentConditions.uvindex),
  );
  detailsGrid.appendChild(
    createDetailItem(
      "Visibility",
      Math.round(data.currentConditions.visibility),
      " km",
    ),
  );
  detailsGrid.appendChild(
    createDetailItem("Cloud Cover", data.currentConditions.cloudcover, "%"),
  );

  todaySection.appendChild(detailsGrid);

  // Sunrise / Sunset
  if (data.currentConditions.sunrise && data.currentConditions.sunset) {
    const sunTimes = document.createElement("div");
    sunTimes.className = "sun-times";

    const sunrise = createDetailItem(
      "Sunrise",
      formatTime(data.currentConditions.sunrise),
    );
    const sunset = createDetailItem(
      "Sunset",
      formatTime(data.currentConditions.sunset),
    );

    sunTimes.appendChild(sunrise);
    sunTimes.appendChild(sunset);
    todaySection.appendChild(sunTimes);
  }

  // Precipitation
  if (data.currentConditions.precip) {
    todaySection.appendChild(
      createDetailItem("Precipitation", data.currentConditions.precip, " mm"),
    );
  }

  return todaySection;
};
