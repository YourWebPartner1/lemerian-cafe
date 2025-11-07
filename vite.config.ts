import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 👈 important
    },
  },
  server: {
    hmr: {
      overlay: true, // shows the nice Vite error popup
    },
  },
});
