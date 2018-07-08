import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherDataFromApi(city: string) {
    if (city !== undefined) {
      // const url = 'https://api.worldweatheronline.com/premium/v1/weather.ashx?q=' + city + '&key=&num_of_days=7&format=json';
      // const exampleRequest = 'data/2.5/weather?q=Istanbul&lang=tr&APPID=7294e6b762db00cceaa0d143a51801d0&units=metric';
      // const baseUrl2 = 'http://api.openweathermap.org/data/2.5/weather';
      const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast';
      const APPID = '7294e6b762db00cceaa0d143a51801d0';
      const lang = 'tr';
      const units = 'metric';
      const q = city || 'Istanbul';

      const request = `${baseUrl}?APPID=${APPID}&lang=${lang}&units=${units}&q=${q}`;
      return this.http.get(request);
    }
  }
}
