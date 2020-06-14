import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'button[app-button]',
  template: `
    <i class="ab-ico" *ngIf="iconName">{{iconName}}</i>
    <span><ng-content></ng-content></span>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() theme: 'primary' | 'secondary' = 'primary';
  @Input() iconName: string = '';

  @HostBinding('class.ab-btn--primary')
  get isPrimary() {
    return this.theme === 'primary';
  }

  @HostBinding('class.ab-btn--secondary')
  get isSecondary() {
    return this.theme === 'secondary';
  }
}
