import {Injectable, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {City} from '../../Models/Weather';

interface Coord {
  lat: number;
  lon: number;
}
interface Geoname {
  cl: string;
  code: string;
  parent: number;
}
interface Stat {
  level: number;
  population: number;
}
interface Station {
  dist: number;
  id: number;
  kf: number;
}
interface JsonCity {
  coord: Coord;
  country: string;
  geoname: Geoname;
  id: number;
  name: string;
  stat: Stat;
  stations: Array<Station>;
}

@Injectable()
export class CityService {
  constructor() {
    const cities = Array<Object>();
    const request = new XMLHttpRequest();
    request.open('GET', `assets/cities.json`);
    request.onload = () => {
      const tempCity = JSON.parse(request.response) as Array<City>;
      tempCity.forEach(city => {
        const newCtiy = Object.assign({}, {'name': city.name});
        cities.push(newCtiy);
      });
    };
    request.send();
    console.log(cities);
  }

  private messageSource = new BehaviorSubject(Array<string>());
  currentMessage = this.messageSource.asObservable();

  // private cities = Array<Object>();
  private citiesId = Array<City>();

  sendSearchResult(searchResult: string[]) {
    this.messageSource.next(searchResult);
  }

  public searchCity(name: string): Array<string> | undefined {
    console.log('this.cities: ', this.citiesId);
    const searchTemp = [];
    this.citiesId.forEach(city => {
      if (city.name.toLowerCase().search(name.toLowerCase()) !== -1) {
        searchTemp.push(city);
      }
    });
    return Array.from(new Set(searchTemp));
  }

  // public searchCityV2(name: string): Array<string> | undefined {
  //   const searchTemp = [];
  //   this.cities.filter(city => {
  //     if (city.toLowerCase().search(name.toLowerCase()) !== -1 && !searchTemp.includes(city)) {
  //       searchTemp.push(city);
  //     }
  //   });
  //   return searchTemp;
  // }
  //
  // public searchCityV3(name: string): Array<string> | undefined {
  //   const searchTemp = [];
  //   this.cities.filter(city => {
  //     if (city.toLowerCase().search(name.toLowerCase()) !== -1) {
  //       if (!searchTemp.includes(city)) {
  //         searchTemp.push(city);
  //       }
  //     }
  //   });
  //   return searchTemp;
  // }
}
