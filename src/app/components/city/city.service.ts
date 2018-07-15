import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable()
export class CityService {
  private cities = [
    'Istanbul', 'Kocaeli', 'London', 'New York'
  ];

  private messageSource = new BehaviorSubject(Array<string>());
  currentMessage = this.messageSource.asObservable();

  changeMessage(searchResult: string[]) {
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
}
