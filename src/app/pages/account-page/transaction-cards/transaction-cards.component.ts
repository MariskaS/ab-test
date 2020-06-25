import {Component, Input} from '@angular/core';
import {TabsData} from "../../../interfaces";

@Component({
  selector: 'app-transaction-cards',
  templateUrl: './transaction-cards.component.html',
  styleUrls: ['./transaction-cards.component.scss']
})
export class TransactionCardsComponent {
  @Input() data: TabsData;

  checkedAll: boolean = false;
  countSelected = 0;

  /**
   * Processing of a click on main checkbox.
   * @param {boolean} value - state main checkbox
   */
  onCheckAll(value) {

    // ForEach all the elements and assign value to report.checked.
    this.data.tableData.forEach((item) => item.checked = value);
    this.calculateCountCheck();
  }

  /**
   * Processing of a click on checkbox in row.
   */
  onCheck() {
    this.calculateCountCheck();
  }

  /**
   * Returns checked rows.
   * @returns {any[]}
   */
  private getSelectedRows() {
    return this.data.tableData.filter((item) => item.checked);
  }

  /**
   * Processing of a click on checkbox.
   */
  calculateCountCheck() {

    // remember count of checked rows.
    this.countSelected = this.getSelectedRows().length;

    // find out the state of the main checkbox by comparing the count of selected reports with the count of all reports.
    this.checkedAll = this.countSelected != 0 && this.countSelected === this.data.tableData.length;
  }
}
