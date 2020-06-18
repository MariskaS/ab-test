import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: 'button[app-button]',
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
  @Input() theme: 'primary' | 'secondary' | 'toggle' | 'buttonIcon' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() iconName: string = '';
  @Input() ariaLabel: '' | null;

  @HostBinding('class.ab-btn--primary')
  get isPrimary() {
    return this.theme === 'primary';
  }

  @HostBinding('class.ab-btn--secondary')
  get isSecondary() {
    return this.theme === 'secondary';
  }

  @HostBinding('class.ab-btn--toggle')
  get isToggle() {
    return this.theme === 'toggle';
  }

  @HostBinding('class.ab-btn--icon')
  get isSort() {
    return this.theme === 'buttonIcon';
  }

  @HostBinding('attr.type')
  get isType() {
    return this.type;
  }

  @HostBinding('attr.aria-label')
  get isAriaLabel() {
    return this.ariaLabel;
  }
}
