import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-city-add',
  templateUrl: './city-add.component.html',
  styleUrls: ['./city-add.component.scss']
})
export class CityAddComponent implements OnInit {

  constructor() { }

  @Output() outputToParent = new EventEmitter<string>();

  notificationToParent(newCity: string) {
    this.outputToParent.emit(newCity);
  }

  ngOnInit() { }

}
