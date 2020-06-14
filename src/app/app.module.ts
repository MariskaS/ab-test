import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { SearchComponent } from './components/search/search.component';
import { TableComponent } from './components/table/table.component';
import { PaginationComponent } from './components/table/components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DropdownComponent,
    SearchComponent,
    TableComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
