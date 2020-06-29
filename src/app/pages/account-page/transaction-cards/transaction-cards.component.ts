import {Component, Input, OnInit} from '@angular/core';

import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {selectFilterOpen} from "../../../store/filter/filter.selectors";
import {FilterState, TabsData} from "../../../interfaces";
import {FilterCloseAction, FilterToggleAction} from "../../../store/filter/filter.actions";

@Component({
  selector: 'app-transaction-cards',
  templateUrl: './transaction-cards.component.html',
  styleUrls: ['./transaction-cards.component.scss']
})
export class TransactionCardsComponent implements OnInit {
  @Input() data: TabsData;

  public checkedAll: boolean = false;
  public countSelected = 0;

  public open$: Observable<boolean>;

  constructor(private store$: Store<FilterState>) {
  }

  ngOnInit() {
    this.open$ = this.store$.pipe(select(selectFilterOpen))
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

  toggleFilter() {
    this.store$.dispatch(new FilterToggleAction())
  }

  closeFilter() {
    this.store$.dispatch(new FilterCloseAction())
  }

}
