const API_KEY = "XJYNGADYZBBDTMFHP9KJJ54EM";

export const getAPIData = async (city) => {
  if (!city || typeof city !== "string") return null;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}/next10days?unitGroup=metric&include=current&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Weather data not found: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: error.message };
  }
};

export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) reject(new Error("Geolocation not supported"));
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
      (err) => reject(err)
    );
  });
};

// Fetch weather for browser's geolocation (auto-detected)
export const getCurrentLocationWeather = async () => {
  try {
    const { latitude, longitude } = await getUserLocation();
    return await getAPIData(`${latitude},${longitude}`);
  } catch (error) {
    console.error("Geolocation failed, using fallback", error);
    return await getAPIData("Paris"); // Fallback
  }
};

// Fetch weather for a manually searched location
export const getSearchedLocationWeather = async (searchTerm) => {
  return await getAPIData(searchTerm);
}