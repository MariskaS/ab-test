import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() columns: any[] = [];
  @Input() body: any[] = [];

  sort: boolean = true;
  collapsedState: boolean[] = [];

  constructor() { }

  ngOnInit() {
    this.collapsedState = this.columns.map(() => false);
  }

  /**
   * Toggle collapse row with description.
   * @param index number of table row.
   */
  onToggle(index) {
    this.collapsedState[index] = !this.collapsedState[index];
  }
}
