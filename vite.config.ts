import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ GitHub Pages configuration
// This ensures all assets (images, fonts, background) load correctly
export default defineConfig({
  plugins: [react()],
  base: "/lemerian-cafe/", // 👈 Must exactly match your GitHub repo name
});
