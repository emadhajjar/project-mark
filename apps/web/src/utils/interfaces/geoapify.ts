export interface ApiGeocode {
  features: Feature[];
  query: Query;
  type: string;
}

export interface GeoapifyError {
  error: string;
}

interface Datasource {
  attribution: string;
  license: string;
  sourcename: string;
  url: string;
}

interface Feature {
  bbox?: number[];
  geometry: Geometry;
  properties: Properties;
  type: string;
}

interface Geometry {
  coordinates: number[];
  type: string;
}

interface Parsed {
  city: string;
  country: string;
  expected_type: string;
}

interface Properties {
  address_line1: string;
  address_line2: string;
  category?: string;
  city: string;
  city_block?: string;
  country: string;
  country_code: string;
  county: string;
  datasource: Datasource;
  district?: string;
  formatted: string;
  housenumber?: string;
  lat: number;
  lon: number;
  municipality?: string;
  name?: string;
  place_id: string;
  plus_code: string;
  plus_code_short: string;
  postcode?: string;
  rank: Rank;
  region?: string;
  result_type: string;
  state: string;
  state_code?: string;
  street?: string;
  suburb?: string;
  timezone: Timezone;
}

interface Query {
  city: string;
  country: string;
  parsed: Parsed;
  text: string;
}

interface Rank {
  confidence: number;
  confidence_city_level: number;
  importance?: number;
  match_type: string;
  popularity: number;
}

interface Timezone {
  name: string;
  offset_DST: string;
  offset_DST_seconds: number;
  offset_STD: string;
  offset_STD_seconds: number;
}
