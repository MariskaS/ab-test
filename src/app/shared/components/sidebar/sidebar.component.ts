import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input() sidebarTitle: string = '';
  @Output('onCloseFilter') onCloseFilter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private isOpenFilter: boolean = false;

  closeFilter() {
    this.onCloseFilter.emit(this.isOpenFilter);
  }
}
