import { getWeatherBySearch } from "../data/userWeather";

const createSearchBar = () => {
	const searchBarDiv = document.createElement("div");
	const searchBar = document.createElement("input");
	const searchIcon = document.createElement("i");
	const searchButton = document.createElement("button");

	searchBar.type = "search";
	searchBar.placeholder = "Search city..";
	searchBar.ariaLabel = "Search for a city";

	searchBarDiv.className = "search-bar-div";
	searchBar.className = "search-bar";
  searchButton.className = "search-button";
	searchIcon.className = "search-icon";

  // Temporary
  searchButton.textContent = "Search"; // Later we can switch this for an icon

  searchButton.appendChild(searchIcon)
	searchBarDiv.appendChild(searchBar);

	searchBarDiv.appendChild(searchButton);

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

	return searchBarDiv;
}

export default createSearchBar;