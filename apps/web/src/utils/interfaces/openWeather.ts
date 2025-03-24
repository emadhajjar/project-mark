export enum MainEnum {
  Clear = 'Clear',
  Clouds = 'Clouds',
  Rain = 'Rain',
}

enum Description {
  BrokenClouds = 'broken clouds',
  ClearSky = 'clear sky',
  FewClouds = 'few clouds',
  LightRain = 'light rain',
  OvercastClouds = 'overcast clouds',
  ScatteredClouds = 'scattered clouds',
}

export interface ApiForecast {
  city: City;
  cnt: number;
  cod: string;
  list: List[];
  message: number;
}

export interface ApiWeather {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: WeatherElement[];
  wind: Wind;
}

export interface OpenWeatherError {
  code: string;
  message: string;
}

interface City {
  coord: Coord;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

interface Clouds {
  all: number;
}

interface Coord {
  lat: number;
  lon: number;
}

interface List {
  clouds: Clouds;
  dt: number;
  dt_txt: Date;
  main: MainClass;
  pop: number;
  rain?: Rain;
  sys: SysPod;
  visibility: number;
  weather: WeatherElement[];
  wind: Wind;
}

interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface MainClass {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

interface Rain {
  '3h': number;
}

interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

interface SysPod {
  pod: 'd' | 'n';
}

interface WeatherElement {
  description: Description;
  icon: string;
  id: number;
  main: MainEnum;
}

interface Wind {
  deg: number;
  gust?: number;
  speed: number;
}
