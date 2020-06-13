import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input() list: any[] = [];
  @Input() dropdownTitle: string;

  isOpen: boolean = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
