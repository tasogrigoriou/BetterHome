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
import {UpdatePropertyComponent} from "./update-property/update-property.component";
import {AdminUsersComponent} from "./admin-users/admin-users.component";
import {AdminListingsComponent} from "./admin-listings/admin-listings.component";
import {UpdateAccountComponent} from "./update-account/update-account.component";
import {AdminImagesComponent} from "./admin-images/admin-images.component";


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
    path: 'add-listing',
    component: AddListingComponent
  },
  {
    path: 'update-property/:listingId',
    component: UpdatePropertyComponent
  },
  {
    path: 'admin-users',
    component: AdminUsersComponent
  },
  {
    path: 'admin-listings',
    component: AdminListingsComponent
  },
  {
    path: 'admin-images',
    component: AdminImagesComponent
  },
  {
    path: 'update-account/:userId',
    component: UpdateAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
