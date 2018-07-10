import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-basic',
  templateUrl: './city-basic.component.html',
  styleUrls: ['./city-basic.component.scss']
})
export class CityBasicComponent implements OnInit {

  constructor() { }

  loading = true;
  weather: any;
  @Input() city: string;

  ngOnInit() {
  }
}
