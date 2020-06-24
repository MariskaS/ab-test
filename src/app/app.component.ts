import {Component, HostBinding} from '@angular/core';

import {LocalStorageService} from "./services/local-storage.service";

import {THEME} from "./constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('attr.theme')
  public get theme(): string {
    return this.localStorageService.get('ab-navbar:theme') || THEME.dark;
  }

  constructor(private localStorageService: LocalStorageService) {
  }
}
