export class Weather {
  cod: string;
  message: number;
  cnt: number;
  list: Array<WeatherData>;
  city: City;
}

export class WeatherData {
  dt: number;
  main: Main;
  weather: Array<WeatherDetail>;
  clouds: Clouds;
  wind: Wind;
  sys: Sys;
  dt_txt: string;
}

export class Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export class WeatherDetail {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export class Wind {
  speed: number;
  deg: number;
}

export class City {
  id: number;
  name: string;
  coord: Coordinate;
  country: string;
  population: number;
}

export class Coordinate {
  lat: number;
  lon: number;
}

export class Clouds {
  all: number;
}

export class Sys {
  pod: string;
}
