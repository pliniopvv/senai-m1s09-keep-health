import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Diet } from 'src/app/model/diet';

@Component({
  selector: 'app-diet-detail',
  templateUrl: './diet-detail.component.html',
  styleUrls: ['./diet-detail.component.css'],
})
export class DietDetailComponent {
  list: Diet[];
  selected: Diet;
  id: number;
  constructor(private activeRoute: ActivatedRoute) {
    this.list = this.load();
    activeRoute.params.subscribe((param: any) =>{
      this.id = param.id;
      this.selected = this.list.find(diet => diet.id == param.id);
    });
  }

  load() {
    return JSON.parse(localStorage.getItem('diets'));
  }
}
