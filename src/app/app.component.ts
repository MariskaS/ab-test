import {Component} from '@angular/core';
import {
  transactionTableActions,
  transactionTableData,
  transactionTableFilter,
  transactionTableHeads
} from './mockData'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  transactionTableFilter = transactionTableFilter;
  transactionTableActions = transactionTableActions;
  transactionTableHeads = transactionTableHeads;
  transactionTableData = transactionTableData;
}
