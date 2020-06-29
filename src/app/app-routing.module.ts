import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccountPageComponent} from "./pages/account-page/account-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {NotFoundPageComponent} from "./pages/not-found-page/not-found-page.component";
import {SiteLayoutComponent} from "./layout/site-layout/site-layout.component";


const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/account',
        pathMatch: 'full'
      },
      {
        path: 'account',
        component: AccountPageComponent
      },
      {
        path: 'profile',
        component: ProfilePageComponent
      },
      {
        path: '**',
        component: NotFoundPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
