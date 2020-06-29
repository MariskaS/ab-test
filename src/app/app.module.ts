import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";

import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {environment} from '../environments/environment';
import {reducers, metaReducers} from './store/reducers';

import {AngularSvgIconModule} from "angular-svg-icon";

import {AppComponent} from "./app.component";
import {ButtonComponent} from "./shared/components/button/button.component";
import {DropdownComponent} from "./shared/components/dropdown/dropdown.component";
import {SearchComponent} from "./shared/components/search/search.component";
import {TabsComponent} from "./shared/components/tabs/tabs.component";
import {NavbarComponent} from "./shared/components/navbar/navbar.component";
import {CardComponent} from "./shared/components/card/card.component";
import {TransactionCardsComponent} from "./pages/account-page/transaction-cards/transaction-cards.component";
import {ContentComponent} from "./shared/components/content/content.component";
import {SidebarComponent} from "./shared/components/sidebar/sidebar.component";

import {AccountPageComponent} from "./pages/account-page/account-page.component";
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';

import {SiteLayoutComponent} from './layout/site-layout/site-layout.component';

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
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
