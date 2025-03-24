import axios from 'axios';

declare const API_GEOAPIFY_KEY: string;
declare const API_GEOAPIFY_URL: string;
declare const API_OPEN_WEATHER_KEY: string;
declare const API_OPEN_WEATHER_URL: string;
declare const WEB_URL: string;

export const cancelToken = axios.CancelToken;

export const client = axios.create({
  baseURL: WEB_URL,
  headers: { 'content-type': 'application/json' },
});

export const geoapifyClient = axios.create({
  baseURL: API_GEOAPIFY_URL,
  headers: { 'content-type': 'application/json' },
});

geoapifyClient.interceptors.request.use((config) => {
  if (!config.params) {
    config.params = {};
  }

  config.params.apiKey = API_GEOAPIFY_KEY;

  return config;
});

export const openWeatherClient = axios.create({
  baseURL: API_OPEN_WEATHER_URL,
  headers: { 'content-type': 'application/json' },
});

openWeatherClient.interceptors.request.use((config) => {
  if (!config.params) {
    config.params = {};
  }

  config.params.appid = API_OPEN_WEATHER_KEY;

  return config;
});
