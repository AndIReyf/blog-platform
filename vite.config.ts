import {reactRouter} from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";
import path from "path";
import {defineConfig, loadEnv} from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

dotenv.config();

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env': env,
    },
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './app')
      }
    },
  }
});
