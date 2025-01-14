import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HelloWorld from "../client/HelloWorld.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <HelloWorld />
  </StrictMode>
);
