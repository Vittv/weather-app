import { renderCurrentWeather } from "../components/current";
import { renderTodayDetails } from "../components/today";
import { renderForecast } from "../components/forecast";

export const renderWeather = (data, container) => {
  container.innerHTML = "";

  // Render all components
  container.appendChild(renderCurrentWeather(data));
  container.appendChild(renderTodayDetails(data));

  const forecast = renderForecast(data);
  if (forecast) {
    container.appendChild(forecast);
  }
};
