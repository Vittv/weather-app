import "./styles/main.css";
import { init } from "./app/app.js";

document.addEventListener("DOMContentLoaded", async () => {
  init(document.getElementById("content"));
  const content = document.getElementById("content");
});
