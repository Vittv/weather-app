import "line-awesome/dist/line-awesome/css/weather-icons.min.css";

export const WEATHER_ICONS = {
  SUN: "las la-sun",
  MOON: "las la-moon",
  RAIN: "las la-cloud-rain",
  SNOWFLAKE: "las la-snowflake",
  CLOUD_MEATBALL: "las la-cloud-meatball", // sleet
  WIND: "las la-wind",
  SMOG: "las la-smog",
  CLOUD: "las la-cloud",
  CLOUD_SUN: "las la-cloud-sun",
  CLOUD_MOON: "las la-cloud-moon",
  BOLT: "las la-bolt",
  CLOUD_HAIL: "las la-cloud-hail",
  TORNADO: "las la-tornado",
  UNKNOWN: "las la-question-circle"
};

export const getWeatherIcon = (condition) => {
  const iconMap = {
    "clear-day": WEATHER_ICONS.SUN,
    "clear-night": WEATHER_ICONS.MOON,
    "rain": WEATHER_ICONS.RAIN,
    "snow": WEATHER_ICONS.SNOWFLAKE,
    "sleet": WEATHER_ICONS.CLOUD_MEATBALL,
    "wind": WEATHER_ICONS.WIND,
    "fog": WEATHER_ICONS.SMOG,
    "cloudy": WEATHER_ICONS.CLOUD,
    "partly-cloudy-day": WEATHER_ICONS.CLOUD_SUN,
    "partly-cloudy-night": WEATHER_ICONS.CLOUD_MOON,
    "thunderstorm": WEATHER_ICONS.BOLT,
    "hail": WEATHER_ICONS.CLOUD_HAIL,
    "tornado": WEATHER_ICONS.TORNADO
  };
  
  return iconMap[condition] || WEATHER_ICONS.UNKNOWN;
};