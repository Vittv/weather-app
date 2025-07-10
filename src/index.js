import "./styles/main.css";
import { init } from "./app/app.js";
import getWeatherForUser from "./data/userWeather.js";

document.addEventListener("DOMContentLoaded", async () => {
	init(document.getElementById("content"));
	const weatherData = await getWeatherForUser();
	console.log(weatherData);
});
