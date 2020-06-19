import {Component, Input, OnInit} from '@angular/core';
import {TabsData} from "../../interfaces";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: TabsData;

  checkedAll: boolean = false;
  countSelected = 0;

  collapsedState: boolean[] = [];

  constructor() {
  }

  ngOnInit() {
    this.collapsedState = this.data.tableHeads.map(() => false);
  }

  /**
   * Toggle collapse row with description.
   * @param {number} index of table row.
   */
  onToggle(index) {
    this.collapsedState[index] = !this.collapsedState[index];
  }

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
