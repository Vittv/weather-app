import "./styles/main.css";
import { init } from "./app/app.js";
import { getInitialWeather } from "./data/userWeather.js";
import createSearchBar from "./components/search.js";

document.addEventListener("DOMContentLoaded", async () => {
	init(document.getElementById("content"));
	const weatherData = await getInitialWeather();
	console.log(weatherData);

	const content = document.getElementById("content");
	content.appendChild(createSearchBar());
});
