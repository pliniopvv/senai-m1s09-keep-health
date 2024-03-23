import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'keep-health';

  constructor() {}

  hidden() {
    let linksHidden = ['/login', '/cadastro'];

    for (let link of linksHidden)
      if (window.location.pathname.indexOf(link) > -1) return false;
    return true;
  }
}
