import { getToggleButtonText, toggleTemperatureUnit } from "../utils/units";

export const createSearchForm = (renderAllWeatherComponents) => {
  const searchForm = document.createElement("form");
  searchForm.className = "search-form";

  const searchButton = document.createElement("button");
  searchButton.type = "submit";
  searchButton.textContent = "Search";

  const cityInput = document.createElement("input");
  cityInput.type = "text";
  cityInput.className = "city-input";
  cityInput.placeholder = "Enter city";

  // C/F & kmh/mph toggle button
  const createUnitToggleButton = () => {
    const button = document.createElement("button");
    button.className = "unit-toggle";
    button.textContent = getToggleButtonText();

    button.addEventListener("click", () => {
      toggleTemperatureUnit();
      button.textContent = getToggleButtonText();

      // Call the function passed from app.js to re-render the UI
      renderAllWeatherComponents();
    });

    return button;
  };

  searchForm.appendChild(searchButton);
  searchForm.appendChild(cityInput);
  const tempToggleButton = createUnitToggleButton();
  searchForm.appendChild(tempToggleButton);

  return { searchForm, cityInput, tempToggleButton };
};
