import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {ButtonComponent} from "./shared/components/button/button.component";
import {DropdownComponent} from "./shared/components/dropdown/dropdown.component";
import {SearchComponent} from "./shared/components/search/search.component";
import {TabsComponent} from "./shared/components/tabs/tabs.component";
import {AccountPageComponent} from "./pages/account-page/account-page.component";
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {CardComponent} from "./shared/components/card/card.component";
import {TransactionCardsComponent} from "./pages/account-page/transaction-cards/transaction-cards.component";
import {ContentComponent} from "./shared/components/content/content.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AngularSvgIconModule} from "angular-svg-icon";
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';

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
    ContentComponent,
    SidebarComponent,
    ProfilePageComponent,
    NotFoundPageComponent,
    SiteLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
