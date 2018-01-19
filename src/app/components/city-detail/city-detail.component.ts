import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  loading = true;
  weather: any;
  @Input() city: string;

  apiCall(city: string) {
    this.weatherService.getWeatherDataFromApi(city)
      .subscribe(data => {
          this.weather = data;
        },
        err => {
          console.log(err);
        },
        () => {
          this.loading = false;
        });
  }

  ngOnInit() {
  }
}
