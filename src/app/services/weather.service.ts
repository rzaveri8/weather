import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  // http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=7c32a1a3235ee5c93ae74c1f4afeb37b

  API_URL = 'http://api.openweathermap.org/data/2.5/forecast';
  API_KEY = '7c32a1a3235ee5c93ae74c1f4afeb37b';

  constructor(private http: HttpClient) { }

  getWeatherDataFromApi(city: string) {
    if (city !== undefined) {
      const cityId = '';
      const url = `${ this.API_URL }?q=${ city }&APPID=${ this.API_KEY }&units=metric`;
      return this.http.get(url);
    }
  }
}
