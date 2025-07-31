let isCelsius = true;

export const toggleTemperatureUnit = () => {
  isCelsius = !isCelsius;
  return isCelsius;
};

export const getCurrentTemperatureUnit = () => isCelsius;

export const convertTemp = (temp) => {
  return isCelsius ? Math.round(temp) : Math.round((temp * 9) / 5 + 32);
};

export const convertSpeed = (speed) => {
  return isCelsius ? Math.round(speed) : Math.round(speed * 0.621371);
};

export const getTemperatureUnitSymbol = () => (isCelsius ? "°C" : "°F");
export const getSpeedUnit = () => (isCelsius ? "km/h" : "mph");
export const getToggleButtonText = () => (isCelsius ? "°F" : "°C");
