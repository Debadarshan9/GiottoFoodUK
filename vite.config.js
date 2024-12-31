import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: '/GiottoFoodUK/', // Use the repository name with leading/trailing slashes
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
