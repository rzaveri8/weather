import { Component, OnInit, ViewChild } from '@angular/core';
import { CityBasicComponent } from '../city-basic/city-basic.component';
import { CityDetailComponent } from '../city-detail/city-detail.component';

@Component({
  selector: 'app-city',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  constructor() { }

  @ViewChild(CityBasicComponent) cityBasic;
  @ViewChild(CityDetailComponent) cityDetail;

  city = 'select city';
  cities = [
    'Istanbul', 'Kocaeli', 'London', 'New York'
  ];
  weather: any;
  localStorageFlag = true; // true when data is not loaded
  myStorage = window.localStorage;

  GetOutputValue(newCity: string) {
    if (newCity) {
      this.cities.push(newCity);
      // localstorage'a cities dizisini ekle
      this.myStorage.setItem('cities', JSON.stringify(this.cities));
    }
  }

  getCitiesFromLocalStorage() {
    this.cities = JSON.parse(this.myStorage.getItem('cities'));
  }

  deleteCity(index) {
    this.cities.splice(index, 1);
    this.myStorage.removeItem('cities');
    this.myStorage.setItem('cities', JSON.stringify(this.cities));
  }

  onDetail(city: string) {
    this.cityDetail.changeCity(city);
  }

  ngOnInit() {
    if (this.myStorage.getItem('cities') === null) {
      this.myStorage.setItem('cities', JSON.stringify(this.cities));
    }
    this.getCitiesFromLocalStorage();
    this.localStorageFlag = false;
  }
}
