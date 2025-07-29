export const createSearchForm = () => {
  const searchForm = document.createElement("form");
  searchForm.className = "search-form";

  const searchButton = document.createElement("button");
  searchButton.type = "submit";
  searchButton.textContent = "Search"; // Todo: change it to an icon later

  const cityInput = document.createElement("input");
  cityInput.type = "text";
  cityInput.className = "city-input";
  cityInput.placeholder = "Enter city";

  // C/F toggle button
  const tempToggleButton = document.createElement("button");
  tempToggleButton.type = "button";
  tempToggleButton.className = "temp-toggle-button";
  tempToggleButton.textContent = "°C"; // Default text, will be toggled by logic later

  searchForm.appendChild(searchButton);
  searchForm.appendChild(cityInput);
  searchForm.appendChild(tempToggleButton);

  return { searchForm, cityInput, tempToggleButton };
};
