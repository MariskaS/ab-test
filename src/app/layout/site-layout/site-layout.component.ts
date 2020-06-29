import {Component, HostBinding} from '@angular/core';

import {THEME} from "../../constants";
import {LocalStorageService} from "../../shared/services/local-storage.service";

@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.scss']
})
export class SiteLayoutComponent {
  @HostBinding('attr.theme')
  public get theme(): string {
    return this.localStorageService.get('ab-navbar:theme') || THEME.dark;
  }

  constructor(private localStorageService: LocalStorageService) {
  }
}
