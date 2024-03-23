import { Component } from '@angular/core';
import { Diet } from '../model/diet';
import "./diet.mock";

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css'],
})
export class DietComponent {
  listLoad: Diet[] = [];
  list: Diet[] = [];
  inputPesquisa: string = '';
  constructor() {
    this.listLoad = JSON.parse(localStorage.getItem('diets')) as Diet[];
    this.list = this.listLoad;
  }

  pesquisa() {
    if (this.inputPesquisa.length > 0) {
      console.log(
        this.listLoad.filter((x) => x.name.indexOf(this.inputPesquisa) > -1)
      );
      this.list = this.listLoad.filter(
        (x) => x.name.indexOf(this.inputPesquisa) > -1
      );
    } else {
      this.list = this.listLoad;
    }
  }
}
