import {Component, OnInit} from '@angular/core';
import {CityService} from '../city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  searchResults: Array<string>;

  constructor(private cityService: CityService) {}

  sendSearchResult(searchResult: string[]) {
    this.cityService.sendSearchResult(searchResult);
  }

  ngOnInit() {
    this.cityService.currentMessage.subscribe(searchResult => {
      this.searchResults = searchResult;
    });
    // if (this.myStorage.getItem('cities') === null) {
    //   this.myStorage.setItem('cities', JSON.stringify(this.cities));
    // }
    // this.getCitiesFromLocalStorage();
    // this.localStorageFlag = false;
  }

  // GetOutputValue(newCity: string) {
  //   if (newCity) {
  //     this.cities.push(newCity);
  //     // localstorage'a cities dizisini ekle
  //     this.myStorage.setItem('cities', JSON.stringify(this.cities));
  //   }
  // }
  //
  // getCitiesFromLocalStorage() {
  //   this.cities = JSON.parse(this.myStorage.getItem('cities'));
  // }
  //
  // deleteCity(index) {
  //   this.cities.splice(index, 1);
  //   this.myStorage.removeItem('cities');
  //   this.myStorage.setItem('cities', JSON.stringify(this.cities));
  // }
  //
  // onDetail(city: string) {
  //   this.cityDetail.changeCity(city);
  // }
}
