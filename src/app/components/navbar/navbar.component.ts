import {Component} from '@angular/core';
import {LocalStorageService} from "../../services/local-storage.service";
import {THEME} from "../../constants";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  private theme = THEME.dark;
  private isLightMode: boolean = false;

  constructor(private localStorageService: LocalStorageService) {
  }

  toggleTheme() {
    this.isLightMode = !this.isLightMode;

    if (this.isLightMode) {
      this.theme = THEME.light;
    } else {
      this.theme = THEME.dark;
    }

    this.saveThemeInLocalStorage(this.theme);
  }

  /**
   * Save a chosen theme to the Local Storage.
   * @param {string} theme - Selected theme for app (light || dark).
   */
  saveThemeInLocalStorage(theme: string) {
    this.localStorageService.set('ab-navbar:theme', theme);
    console.log('theme', theme)
  }

}
