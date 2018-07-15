import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {CityComponent} from './city.component';
import {CityService} from './city.service';
import {CitySearchComponent} from './city-search/city-search.component';
import {CityListComponent} from './city-list/city-list.component';

@NgModule({
  declarations: [CityComponent, CitySearchComponent, CityListComponent],
  imports: [BrowserModule],
  exports: [CityComponent, CitySearchComponent, CityListComponent],
  providers: [CityService]
})
export class CityModule {
}
