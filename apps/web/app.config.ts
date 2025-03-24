import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from '@tanstack/react-start/config';
import { configDotenv } from 'dotenv';
import { URL } from 'node:url';
import tsconfigPaths from 'vite-tsconfig-paths';

configDotenv({
  path: `../../conf/${process.env.NODE_ENV ?? 'dev'}.env`,
});

const webUrl = process.env.WEB_URL ?? '';
const url = new URL(webUrl);

process.env.PORT = url.port;

export default defineConfig({
  tsr: {
    appDirectory: 'src',
  },
  vite: {
    define: {
      API_GEOAPIFY_KEY: `"${process.env.API_GEOAPIFY_KEY}"`,
      API_GEOAPIFY_URL: `"${process.env.API_GEOAPIFY_URL}"`,
      API_OPEN_WEATHER_KEY: `"${process.env.API_OPEN_WEATHER_KEY}"`,
      API_OPEN_WEATHER_URL: `"${process.env.API_OPEN_WEATHER_URL}"`,
      WEB_URL: `"${webUrl}"`,
    },
    plugins: [tailwindcss(), tsconfigPaths()],
  },
});
