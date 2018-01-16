import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  private url = 'https://api.worldweatheronline.com/premium/v1/weather.ashx?q=Istanbul&key=f257452e605f4a09a7c204943181401&num_of_days=7&format=json';

  getWeatherDataFromApi() {
    return this.http.get(this.url);
  }
}
