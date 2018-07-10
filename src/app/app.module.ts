import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { CityBasicComponent } from './components/city/city-basic/city-basic.component';
import { CityAddComponent } from './components/city/city-add/city-add.component';
import { CityDetailComponent } from './components/city/city-detail/city-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityBasicComponent,
    CityAddComponent,
    CityDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
