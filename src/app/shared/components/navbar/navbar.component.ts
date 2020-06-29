import {Component, OnInit} from '@angular/core';

import {LocalStorageService} from '../../services/local-storage.service';
import {THEME} from '../../../constants';
import {SidebarCloseAction, SidebarToggleAction} from "../../../store/sidebar/sidebar.actions";
import {select, Store} from "@ngrx/store";
import {selectSidebarOpen} from "../../../store/sidebar/sidebar.selectors";
import {Observable} from "rxjs";
import {SidebarState} from "../../../interfaces";
import {mainNavigationList} from "../../../mockData";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private theme = THEME.dark;
  private isLightMode: boolean = false;

  public mainNavigationList = mainNavigationList;

  public open$: Observable<boolean>;

  constructor(private localStorageService: LocalStorageService,
              private store$: Store<SidebarState>) {
  }

  ngOnInit() {
    this.open$ = this.store$.pipe(select(selectSidebarOpen))
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
  }

  toggleNav() {
    this.store$.dispatch(new SidebarToggleAction())
  }

  closeNav() {
    this.store$.dispatch(new SidebarCloseAction())
  }

}
