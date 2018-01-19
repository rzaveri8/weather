import { Component, OnInit, ViewChild } from '@angular/core';
import { CityDetailComponent } from '../city-detail/city-detail.component';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor() { }

  @ViewChild(CityDetailComponent) cityDetail;

  city = 'Istanbul';
  cities = [
    'Istanbul', 'Kocaeli', 'London', 'New York'
  ];

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
    this.cityDetail.apiCall(this.city);
  }

  ngOnInit() { }
}
