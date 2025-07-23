import "line-awesome/dist/line-awesome/css/line-awesome.min.css";

export const getWeatherIcon = (condition) => {
  const iconMap = {
    "clear-day": "las la-sun",
    "clear-night": "las la-moon",
    rain: "las la-cloud-rain",
    snow: "las la-snowflake",
    sleet: "las la-cloud-meatball",
    wind: "las la-wind",
    fog: "las la-smog",
    cloudy: "las la-cloud",
    "partly-cloudy-day": "las la-cloud-sun",
    "partly-cloudy-night": "las la-cloud-moon",
    thunderstorm: "las la-bolt",
    hail: "las la-cloud-hail",
    tornado: "las la-tornado",
  };

  return iconMap[condition] || "las la-question-circle";
};
