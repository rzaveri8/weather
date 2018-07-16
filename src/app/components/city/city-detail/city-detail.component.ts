import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../../services/weather.service';
import { Weather } from '../../../Models/Weather';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.scss']
})
export class CityDetailComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  city: string;
  weather: Weather;
  hidden = true;
  loading: boolean;
  time = new Date().toLocaleDateString('tr');

  ngOnInit() {}

  changeCity(city: string) {
    this.loading = true;

    this.weatherService.getWeatherDataFromApi(city).subscribe(
      weather => {
        this.weather = weather as Weather;
        this.city = city;
        this.hidden = false;
      },
      err => {
        console.log(err);
      },
      () => {
        this.loading = false;
      }
    );
  }
}