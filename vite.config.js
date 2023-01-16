const path = require("path");
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react(), dynamicImport(/* options */)],
  // resolve: {
  //   // alias: {
  //   //   "@": path.resolve(__dirname, "./src"),
  //   // },
  // },
});
