import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {ButtonComponent} from './components/button/button.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {SearchComponent} from './components/search/search.component';
import {TableComponent} from './components/table/table.component';
import {PaginationComponent} from './components/table/components/pagination/pagination.component';

import {HttpClientModule} from "@angular/common/http";
import {AngularSvgIconModule} from "angular-svg-icon";
import { SortComponent } from './components/table/components/sort/sort.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DropdownComponent,
    SearchComponent,
    TableComponent,
    PaginationComponent,
    SortComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
