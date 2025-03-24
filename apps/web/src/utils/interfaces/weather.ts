import { ApiForecast, ApiWeather } from './openWeather';

export interface ClientWeather {
  forecast: ApiForecast;
  weather: ApiWeather;
}
