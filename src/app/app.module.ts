import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpClientModule} from '@angular/common/http';


import {AngularSvgIconModule} from "angular-svg-icon";
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {ButtonComponent} from './components/button/button.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {SearchComponent} from './components/search/search.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TabsComponent} from './components/tabs/tabs.component';
import {AccountPageComponent} from './pages/account-page/account-page.component';
import {CardComponent} from './components/card/card.component';
import {TransactionCardsComponent} from './pages/account-page/transaction-cards/transaction-cards.component';
import {ContentComponent} from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    DropdownComponent,
    SearchComponent,
    TabsComponent,
    AccountPageComponent,
    NavbarComponent,
    CardComponent,
    TransactionCardsComponent,
    ContentComponent
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
