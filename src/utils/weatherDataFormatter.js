import { getInitialWeather, getWeatherBySearch } from "../data/userWeather";
import { getWeatherIcon } from "../assets/icons/icons";

export const fetchFormattedWeather = async (location = null) => {
  try {
    const apiData = location
      ? await getWeatherBySearch(location)
      : await getInitialWeather();

    return {
      current: formatCurrentWeather(apiData),
      today: formatTodayDetails(apiData),
      forecast: format10DayForecast(apiData),
    };
  } catch (error) {
    console.error("Weather formatting failed:", error);
    return null;
  }
};

const formatCurrentWeather = (data) => ({
  city: data.resolvedAddress || data.address,
  currentTemp: Math.round(data.currentConditions.temp),
  condition: data.currentConditions.conditions,
  icon: getWeatherIcon(data.currentConditions.icon),
  feelsLike: Math.round(data.currentConditions.feelslike),
  high: Math.round(data.days[0].tempmax),
  low: Math.round(data.days[0].tempmin),
  humidity: data.currentConditions.humidity,
  windSpeed: Math.round(data.currentConditions.windspeed),
  sunrise: formatTime(data.currentConditions.sunrise),
  sunset: formatTime(data.currentConditions.sunset),
  timestamp: data.currentConditions.datetime,
});

const formatTodayDetails = (data) => ({
  hours: data.days[0].hours.map((hour) => ({
    time: formatHour(hour.datetime),
    temp: Math.round(hour.temp),
    icon: getWeatherIcon(data.currentConditions.icon),
    precip: hour.precip,
  })),
  details: {
    uvIndex: data.days[0].uvindex,
    precip: data.days[0].precip,
    humidity: data.days[0].humidity,
    wind: data.days[0].windspeed,
    sunrise: formatTime(data.days[0].sunrise),
    sunset: formatTime(data.days[0].sunset),
  },
});

const format10DayForecast = (data) =>
  data.days.slice(0, 10).map((day) => ({
    date: formatDate(day.datetime),
    weekday: new Date(day.datetime).toLocaleDateString("en", {
      weekday: "short",
    }),
    high: Math.round(day.tempmax),
    low: Math.round(day.tempmin),
    icon: getWeatherIcon(data.currentConditions.icon),
    condition: day.conditions,
    precip: day.precip,
  }));

const formatTime = (timeStr) => timeStr.slice(0, 5);
const formatHour = (datetime) => new Date(datetime).getHours() + ":00";
const formatDate = (dateStr) => dateStr.split("-").slice(1).join("/");
