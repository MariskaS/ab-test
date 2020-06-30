import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: '[app-button]',
  template: `
    <svg-icon class="ab-btn__ico"
              *ngIf="iconName"
              aria-hidden="true"
              src="assets/icons/{{iconName}}.svg"></svg-icon>
    <span><ng-content></ng-content></span>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() theme: 'primary' | 'secondary' | 'buttonIcon' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() iconName: string = '';

  @HostBinding('class.ab-btn--primary')
  get isPrimary() {
    return this.theme === 'primary';
  }

  @HostBinding('class.ab-btn--secondary')
  get isSecondary() {
    return this.theme === 'secondary';
  }

  @HostBinding('class.ab-btn--icon')
  get isIcon() {
    return this.theme === 'buttonIcon';
  }

  @HostBinding('attr.type')
  get isType() {
    return this.type;
  }
}
