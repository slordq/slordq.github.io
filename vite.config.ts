import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
const ASSET_URL = process.env.ASSET_URL || '';
console.log('ASSET_URL', ASSET_URL);

export default defineConfig({  
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
//  base: ASSET_URL ? `${ASSET_URL}` : '/',
});
