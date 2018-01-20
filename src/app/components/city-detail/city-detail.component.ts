import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherDataService } from '../../services/weather-data.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private weatherData: WeatherDataService) { }

  city: string;
  weather: any;
  hidden = true;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.city = params.city;
    });

    /*this.route.data
      .subscribe(weather => this.weather = weather);*/

    this.route.data
      .subscribe( (weather) => {
        if (this.weather) {
          this.weather = weather;
          this.hidden = false;
        }
      });

    this.weather = this.weatherData.storage;
    console.log(this.weather);
  }
}
