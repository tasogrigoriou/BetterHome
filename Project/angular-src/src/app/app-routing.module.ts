import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {ExampleComponent} from "./example/example.component";
import {SearchResultsComponent} from "./search-results/search-results.component";
import {AccountComponent} from "./account/account.component";
import {AddListingComponent} from "./add-listing/add-listing.component";
import {AdvancedSearchComponent} from "./advanced-search/advanced-search.component";
import {UpdateLoginComponent} from "./update-login/update-login.component";


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about-us',
    loadChildren: './about-us/about-us.module#AboutUsModule'
  },
  {
    path: 'properties',
    loadChildren: './property/property.module#PropertyModule'
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'update-login',
    component: UpdateLoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'advanced-search',
    component: AdvancedSearchComponent
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: { title: 'Example Fake Data' }
  },
  {
    path: 'search-results',
    component: SearchResultsComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path : 'add-listing',
    component: AddListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
