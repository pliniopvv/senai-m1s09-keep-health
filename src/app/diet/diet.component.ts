import { Component } from '@angular/core';
import { Diet } from '../model/diet';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css'],
})
export class DietComponent {
  list: Diet[] = [];
  constructor() {
    this.list = JSON.parse(localStorage.getItem('diets')) as Diet[];
  }
}
