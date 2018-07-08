import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CityComponent } from './components/city/city.component';
import { CityBasicComponent } from './components/city-basic/city-basic.component';
import { CityAddComponent } from './components/city-add/city-add.component';
import { CityDetailComponent } from './components/city-detail/city-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
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
