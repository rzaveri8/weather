interface RootObject {
  data: Data;
}

interface Data {
  request: Request[];
  current_condition: Currentcondition[];
  weather: Weather[];
  ClimateAverages: ClimateAverage[];
}

interface ClimateAverage {
  month: Month[];
}

interface Month {
  index: string;
  name: string;
  avgMinTemp: string;
  avgMinTemp_F: string;
  absMaxTemp: string;
  absMaxTemp_F: string;
  avgDailyRainfall: string;
}

interface Weather {
  date: string;
  astronomy: Astronomy[];
  maxtempC: string;
  maxtempF: string;
  mintempC: string;
  mintempF: string;
  totalSnow_cm: string;
  sunHour: string;
  uvIndex: string;
  hourly: Hourly[];
}

interface Hourly {
  time: string;
  tempC: string;
  tempF: string;
  windspeedMiles: string;
  windspeedKmph: string;
  winddirDegree: string;
  winddir16Point: string;
  weatherCode: string;
  weatherIconUrl: WeatherIconUrl[];
  weatherDesc: WeatherIconUrl[];
  precipMM: string;
  humidity: string;
  visibility: string;
  pressure: string;
  cloudcover: string;
  HeatIndexC: string;
  HeatIndexF: string;
  DewPointC: string;
  DewPointF: string;
  WindChillC: string;
  WindChillF: string;
  WindGustMiles: string;
  WindGustKmph: string;
  FeelsLikeC: string;
  FeelsLikeF: string;
  chanceofrain: string;
  chanceofremdry: string;
  chanceofwindy: string;
  chanceofovercast: string;
  chanceofsunshine: string;
  chanceoffrost: string;
  chanceofhightemp: string;
  chanceoffog: string;
  chanceofsnow: string;
  chanceofthunder: string;
}

interface Astronomy {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
}

interface Currentcondition {
  observation_time: string;
  temp_C: string;
  temp_F: string;
  weatherCode: string;
  weatherIconUrl: WeatherIconUrl[];
  weatherDesc: WeatherIconUrl[];
  windspeedMiles: string;
  windspeedKmph: string;
  winddirDegree: string;
  winddir16Point: string;
  precipMM: string;
  humidity: string;
  visibility: string;
  pressure: string;
  cloudcover: string;
  FeelsLikeC: string;
  FeelsLikeF: string;
}

interface WeatherIconUrl {
  value: string;
}

interface Request {
  query: string;
}
