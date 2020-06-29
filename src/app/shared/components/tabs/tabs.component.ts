import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  @Input() tabs: any[] = [];
  @Input() showToolbar: boolean = true;

  tabId: string = '';

  @Output() selectedTab: EventEmitter<string> = new EventEmitter();

  ngOnInit() {

    // Only for ARIA.
    this.tabs.forEach(elem => {
      this.tabId = elem.id;
    })
  }

  /**
   * Select tab.
   * @param {object} tab.
   */
  onSelectTab(tab): void {
    this.tabs.filter(elem => elem.active = false);
    tab.active = true;
    this.selectedTab.emit(tab.name);
  }
}
