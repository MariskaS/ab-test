import {Component} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  totalItems: number = 150;

  from: number = 1;
  to: number = 50;
}
