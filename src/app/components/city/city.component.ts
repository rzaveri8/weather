import { Component, OnInit, ViewChild } from '@angular/core';
import { CityBasicComponent } from '../city-basic/city-basic.component';
import { CityDetailComponent } from '../city-detail/city-detail.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor() { }

  @ViewChild(CityBasicComponent) cityBasic;
  @ViewChild(CityDetailComponent) cityDetail;

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

  onDetail(city: string) {
    this.cityDetail.changeCity(city);
  }

  ngOnInit() { }
}
