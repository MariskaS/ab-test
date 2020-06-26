import {Component} from '@angular/core';
import {
  accountTabs,
  accountStatementsTabsData,
  accountTransactionsTabsData
} from '../../mockData';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent {
  accountTabs = accountTabs;
  data = accountTransactionsTabsData;
  isOpen: boolean = true;

  /**
   * Choice tab and filter data
   * @param {string} tabName
   */
  selectTab(tabName) {
    if (tabName === 'account transactions') {
      this.data = accountTransactionsTabsData;
    }
    if (tabName === 'bank statements') {
      this.data = accountStatementsTabsData;
    }
  }

  toggleFilter() {
    this.isOpen = !this.isOpen;
  }
}
