import getAPIData from "./fetchAPI";
import getUserLocation from "./userLocation";

export const getInitialWeather = async () => {
  try {
    const { latitude, longitude } = await getUserLocation();
    return await getAPIData(`${latitude},${longitude}`);
  } catch (error) {
    console.error("Geolocation failed, using fallback", error);
    return await getAPIData("Paris"); // Fallback
  }
};

export const getWeatherBySearch = async (searchTerm) => {
  return await getAPIData(searchTerm);
};
