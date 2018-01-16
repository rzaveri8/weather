import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  cities = [
    'Istanbul', 'Kocaeli', 'Ankara'
  ];
  weather: any;
  loading = true;

  ngOnInit() {
    // Get Weather Data From Api
    this.getWeatherData();
  }

  private getWeatherData() {
    this.weatherService.getWeatherDataFromApi()
      .subscribe(data => {
        this.weather = data;
      },
        err => {
        console.error(err);
      },
        () => {
        this.loading = false;
      });
  }
}
