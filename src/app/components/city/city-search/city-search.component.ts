import {Component, OnInit} from '@angular/core';
import {CityService} from '../city.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  searchResults: Array<string>;

  constructor(private cityService: CityService) {}

  search(name: string) {
    const searchResults = this.cityService.searchCity(name);

    this.sendSearchResult(searchResults);
  }

  sendSearchResult(searchResult: string[]) {
    this.cityService.sendSearchResult(searchResult);
  }

  ngOnInit() {
    this.cityService.currentMessage.subscribe(searchResult => {
      this.searchResults = searchResult;
    });
  }
}
