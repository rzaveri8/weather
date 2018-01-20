import { Component, OnInit, ViewChild } from '@angular/core';
import { CityBasicComponent } from '../city-basic/city-basic.component';
import {WeatherDataService} from '../../services/weather-data.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private weatherData: WeatherDataService) { }

  @ViewChild(CityBasicComponent) cityBasic;

  city = 'select city';
  cities = [
    'Istanbul', 'Kocaeli', 'London', 'New York'
  ];
  weather: any;

  GetOutputValue(newCity: string) {
    if (newCity) {
      this.cities.push(newCity);
    }
  }

  deleteCity(index) {
    this.cities.splice(index, 1);
  }

  onSelect(city: string) {
    this.city = city;
    this.cityBasic.apiCall(this.city);
  }

  onDetail(city: string) {
    this.city = city;
    this.weather = this.cityBasic.weather;

    // City.Component ve City-Detail.component arasında veri
    // paylaşımı için kullanılan servise weather verisinin aktarımı
    this.weatherData.storage = this.weather;
    console.log(this.weather);
  }

  ngOnInit() { }
}
