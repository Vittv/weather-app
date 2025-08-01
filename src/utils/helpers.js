const repoName = "weather-app";

export const getWeatherIcon = (iconName) => {
  return `/${repoName}/icons/${iconName}.svg`;
};

export const formatTime = (timeString) => {
  if (!timeString || typeof timeString !== "string") return timeString || "--";

  try {
    const [hours, minutes] = timeString.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  } catch (error) {
    console.error("Error formatting time:", error);
    return timeString;
  }
};

export const createDetailItem = (label, value, unit = "") => {
  const item = document.createElement("div");
  item.className = "detail-item";

  const detailLabel = document.createElement("span");
  detailLabel.className = "detail-label";
  detailLabel.textContent = label;

  const detailValue = document.createElement("span");
  detailValue.className = "detail-value";
  detailValue.textContent = `${value}${unit}`;

  item.appendChild(detailLabel);
  item.appendChild(detailValue);
  return item;
};
