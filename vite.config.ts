import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/noptis-gid-inspector/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});