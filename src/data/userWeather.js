import getAPIData from "./fetchAPI";
import getUserLocation from "./userLocation"

const getWeatherForUser = async () => {
	try {
		const { latitude, longitude } = await getUserLocation();
		const locationString = `${latitude},${longitude}`;
		return await getAPIData(locationString);
	} catch (error) {
		console.error("Could not get user location:", error);
		return await getAPIData("Paris"); // fallback
	}
}

export default getWeatherForUser;