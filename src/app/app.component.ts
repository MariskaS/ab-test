import {Component, HostBinding} from '@angular/core';

import {THEME} from "./constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('attr.theme')
  private theme = THEME.dark;

  toggleTheme($event: boolean) {
    if ($event === true) {
      this.theme = THEME.light;
    } else {
      this.theme = THEME.dark;
    }
  }
}
