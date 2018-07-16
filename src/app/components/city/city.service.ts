import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class CityService {
  private cities = [
    'Istanbul', 'Kocaeli', 'London', 'New York'
  ];

  private messageSource = new BehaviorSubject(Array<string>());
  currentMessage = this.messageSource.asObservable();

  sendSearchResult(searchResult: string[]) {
    this.messageSource.next(searchResult);
  }

  public searchCity(name: string): Array<string> | undefined {
    const searchTemp = [];
    this.cities.forEach(city => {
      if (city.toLowerCase().search(name.toLowerCase()) !== -1) {
        searchTemp.push(city);
      }
    });
    return Array.from(new Set(searchTemp));
  }

  public searchCityV2(name: string): Array<string> | undefined {
    const searchTemp = [];
    this.cities.filter(city => {
      if (city.toLowerCase().search(name.toLowerCase()) !== -1 && !searchTemp.includes(city)) {
        searchTemp.push(city);
      }
    });
    return searchTemp;
  }

  public searchCityV3(name: string): Array<string> | undefined {
    const searchTemp = [];
    this.cities.filter(city => {
      if (city.toLowerCase().search(name.toLowerCase()) !== -1) {
        if (!searchTemp.includes(city)) {
          searchTemp.push(city);
        }
      }
    });
    return searchTemp;
  }
}
