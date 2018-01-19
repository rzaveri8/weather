import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Get Weather Data From Api
  }
}
