import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    //<- ADD FROM HERE ONWARDS!!!!!!!!!!!!!!!!!!!!!!!!
    rollupOptions: {
      input: "/index.html",
    },
  },
  server: {
    historyApiFallback: true, // Ensures proper routing in development
  },
  base: "./", // Adjust if deploying to a subdirectory
});
