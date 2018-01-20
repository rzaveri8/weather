import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CityComponent } from './components/city/city.component';
import { CityBasicComponent } from './components/city-basic/city-basic.component';
import { CityAddComponent } from './components/city-add/city-add.component';
import { CityDetailComponent } from './components/city-detail/city-detail.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'city-detail/:city', component: CityDetailComponent, data: { weatherData: 'weatherData' } }
];

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
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
