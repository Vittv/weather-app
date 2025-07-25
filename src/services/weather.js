const API_KEY = "XJYNGADYZBBDTMFHP9KJJ54EM";

export const getAPIData = async (city) => {
  if (!city || typeof city !== "string") return null;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}/next10days?unitGroup=metric&include=current&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    if (!response.ok)
      throw new Error(`Weather data not found: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: error.message };
  }
};
