import "./styles/main.css";
import { init } from "./app/app.js";
import { getCurrentLocationWeather } from "./services/weatherService.js";
import createSearchBar from "./components/search.js";

document.addEventListener("DOMContentLoaded", async () => {
  init(document.getElementById("content"));
  const currentLocationWeatherData = await getCurrentLocationWeather();
  console.log(currentLocationWeatherData);

  const content = document.getElementById("content");
  content.appendChild(createSearchBar());
});
