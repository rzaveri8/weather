import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CityComponent } from './components/city/city.component';
import { CityBasicComponent } from './components/city-basic/city-basic.component';
import { CityAddComponent } from './components/city-add/city-add.component';
import {CityDetailComponent} from './components/city-detail/city-detail.component';

const appRoutes: Routes = [
  { path: 'city-basic/:city', component: CityBasicComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CityComponent,
    CityBasicComponent,
    CityAddComponent,
    CityDetailComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
