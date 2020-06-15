import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columnsList: any[] = [];
  @Input() bodyList: any[] = [];

  checkedAll: boolean = false;
  countSelected = 0;

  sort: boolean = true;
  collapsedState: boolean[] = [];

  constructor() {
  }

  ngOnInit() {
    this.collapsedState = this.columnsList.map(() => false);
  }

  /**
   * Toggle collapse row with description.
   * @param index {number} of table row.
   */
  onToggle(index) {
    this.collapsedState[index] = !this.collapsedState[index];
  }

  /**
   * Processing of a click on main checkbox.
   * @param value {boolean} state main checkbox
   */
  onCheckAll(value) {

    // ForEach all the elements and assign value to report.checked.
    this.bodyList.forEach((item) => item.checked = value);
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
    return this.bodyList.filter((item) => item.checked);
  }

  /**
   * Processing of a click on checkbox.
   */
  calculateCountCheck() {

    // remember count of checked rows.
    this.countSelected = this.getSelectedRows().length;

    // find out the state of the main checkbox by comparing the count of selected reports with the count of all reports.
    this.checkedAll = this.countSelected != 0 && this.countSelected === this.bodyList.length;
  }
}
