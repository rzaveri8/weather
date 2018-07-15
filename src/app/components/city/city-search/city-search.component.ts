import {Component, OnInit} from '@angular/core';
import {CityService} from '../city.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss']
})
export class CitySearchComponent implements OnInit {

  searchResult: Array<string>;

  constructor(private cityService: CityService) {
  }

  search(name: string) {
    const searchResult = this.cityService.searchCity(name);
    // console.log(searchResult);
    // arama sonucu city-list compoenentine wgönderilecek.
    this.newMessage(searchResult);
  }

  newMessage(searchResult: string[]) {
    this.cityService.changeMessage(searchResult);
  }

  ngOnInit() {
    this.cityService.currentMessage.subscribe(searchResult => this.searchResult = searchResult);
  }
}
