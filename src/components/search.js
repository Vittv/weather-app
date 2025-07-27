export const createSearchForm = () => {
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

  return { searchForm, cityInput };
};
