import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//@ts-ignore
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),

      "@config": fileURLToPath(new URL("./src/config", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@context": fileURLToPath(new URL("./src/context", import.meta.url)),
    },
  },
});
