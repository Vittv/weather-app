import { getWeatherBySearch } from "../data/userWeather";

const createSearchBar = () => {
  const searchBarDiv = document.createElement("div");
  const searchBar = document.createElement("input");
  const searchIcon = document.createElement("i");
  const searchButton = document.createElement("button");

  const temperatureTypeDiv = document.createElement("div");
  const celsiusButton = document.createElement("button");
  const fahrenheitButton = document.createElement("button");

  searchBar.type = "search";
  searchBar.placeholder = "Enter city..";
  searchBar.ariaLabel = "Search for a city";

  searchBarDiv.className = "search-bar-div";
  searchBar.className = "search-bar";
  searchButton.className = "search-button";
  searchIcon.className = "search-icon";

  temperatureTypeDiv.className = "temperature-type";
  celsiusButton.className = "celsius-button";
  fahrenheitButton.className = "fahrenheit-button";
  celsiusButton.textContent = "°C";
  fahrenheitButton.textContent = "°F";

  searchButton.innerHTML = `
  <svg class="search-icon" viewBox="0 0 24 24">
    <path d="M15.5 14h-.79l-.28-.27a6.5 6.5 0 0 0 1.48-5.34c-.47-2.78-2.79-5-5.59-5.34a6.505 6.505 0 0 0-7.27 7.27c.34 2.8 2.56 5.12 5.34 5.59a6.5 6.5 0 0 0 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
  `;

  searchButton.appendChild(searchIcon);
  searchBarDiv.appendChild(searchBar);
  searchBarDiv.appendChild(searchButton);

  temperatureTypeDiv.appendChild(celsiusButton);
  temperatureTypeDiv.appendChild(fahrenheitButton);
  searchBarDiv.appendChild(temperatureTypeDiv);

  const handleSearch = async (searchTerm) => {
    try {
      searchBar.disabled = true;
      searchIcon.classList.add("loading");

      const weatherData = await getWeatherBySearch(searchTerm);
      console.log("Weather Data Received:", weatherData);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      searchBar.disabled = false;
      searchIcon.classList.remove("loading");
    }
  };

  searchBar.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const searchTerm = searchBar.value.trim();
      if (searchTerm) handleSearch(searchTerm);
    }
  });

  searchButton.addEventListener("click", () => {
    const searchTerm = searchBar.value.trim();
    if (searchTerm) handleSearch(searchTerm);
  });

  // Todo: Add an event listener for both temperatureTypeDiv buttons

  return searchBarDiv;
};

export default createSearchBar;
