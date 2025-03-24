import axios, { GenericAbortSignal } from 'axios';

import { client, geoapifyClient, openWeatherClient } from './client';
import { Unit } from './interfaces/common';
import { ApiGeocode, GeoapifyError } from './interfaces/geoapify';
import { ApiForecast, ApiWeather, OpenWeatherError } from './interfaces/openWeather';
import { ClientWeather } from './interfaces/weather';

export const ServerApi = {
  async getCoordinate(text: string, signal?: GenericAbortSignal) {
    try {
      const { data } = await geoapifyClient.get<ApiGeocode>('geocode/search', {
        params: {
          limit: 1,
          text,
        },
        signal,
      });

      return {
        lat: data.features[0].properties.lat,
        lon: data.features[0].properties.lon,
      };
    } catch (error) {
      let errorMessage: string | undefined;

      if (axios.isAxiosError<GeoapifyError>(error)) {
        errorMessage = error.response?.data.error;
      }

      throw errorMessage ?? 'An error occurred';
    }
  },
  async getForecast(
    parameters: {
      lat: number;
      lon: number;
      units?: Unit;
    },
    signal?: GenericAbortSignal,
  ) {
    try {
      const { data } = await openWeatherClient.get<ApiForecast>('forecast', {
        params: parameters,
        signal,
      });

      return data;
    } catch (error) {
      let errorMessage: string | undefined;

      if (axios.isAxiosError<OpenWeatherError>(error)) {
        errorMessage = error.response?.data.message;
      }

      throw errorMessage ?? 'An error occurred';
    }
  },
  async getWeather(
    parameters: {
      lat: number;
      lon: number;
      units?: Unit;
    },
    signal?: GenericAbortSignal,
  ) {
    try {
      const { data } = await openWeatherClient.get<ApiWeather>('weather', {
        params: parameters,
        signal,
      });

      return data;
    } catch (error) {
      let errorMessage: string | undefined;

      if (axios.isAxiosError<OpenWeatherError>(error)) {
        errorMessage = error.response?.data.message;
      }

      throw errorMessage ?? 'An error occurred';
    }
  },
};

export const ClientApi = {
  async getWeather(
    parameters: {
      text: string;
      units?: Unit;
    },
    signal?: GenericAbortSignal,
  ) {
    const { data } = await client.get<ClientWeather>('api/weather', {
      params: parameters,
      signal,
    });

    return data;
  },
};
