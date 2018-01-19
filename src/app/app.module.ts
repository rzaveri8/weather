import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CityComponent } from './components/city/city.component';
import { CityDetailComponent } from './components/city-detail/city-detail.component';
import { CityAddComponent } from './components/city-add/city-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityComponent,
    CityDetailComponent,
    CityAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
