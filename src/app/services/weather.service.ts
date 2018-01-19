import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherDataFromApi(city: string) {
    if (city !== undefined) {
      const url = 'https://api.worldweatheronline.com/premium/v1/weather.ashx?q=' + city + '&key=f257452e605f4a09a7c204943181401&num_of_days=7&format=json';
      console.log(city);
      return this.http.get(url);
    }
  }
}
