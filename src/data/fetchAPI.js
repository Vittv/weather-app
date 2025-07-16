const getAPIData = async (city) => {
  if (!city || typeof city !== "string") {
    console.error("Invalid city name");
    return null;
  }
  const API_KEY = "XJYNGADYZBBDTMFHP9KJJ54EM";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(city)}/next6days?unitGroup=metric&include=current&key=${API_KEY}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Weather data not found: ${response.status} ${errorText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return { error: error.message };
  }
};

export default getAPIData;