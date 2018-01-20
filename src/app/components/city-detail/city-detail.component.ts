import { Component, OnInit} from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  city: string;
  weather: any;
  hidden = true;
  loading: boolean;

  ngOnInit() {
  }

  changeCity(city: string) {
    this.loading = true;

    this.weatherService.getWeatherDataFromApi(city)
      .subscribe((weather) => {
        this.weather = weather;
        this.city = city;
        this.hidden = false;
      },
        err => {
          console.log(err);
        },
        () => {
          this.loading = false;
        });
  }
}
