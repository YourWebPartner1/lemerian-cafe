// src/main.tsx (or index.tsx)
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

/* -------------------------------------------------------
   ⭐ Global Google Event Tracker (Do NOT remove)
-------------------------------------------------------- */
export const gtagEvent = (action: string, params: object = {}) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  } else {
    console.warn("Google Analytics not loaded yet");
  }
};
/* ----------------------------------------------------- */

// Create React root and render app within React.StrictMode
createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
