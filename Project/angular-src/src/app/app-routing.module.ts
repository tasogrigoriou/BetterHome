import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PropertyComponent} from "./property/property.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ExampleComponent} from "./example/example.component";
<<<<<<< HEAD
import {SinglePropOffsetValues} from "@angular/core/src/render3/interfaces/styling";
import {PropertySingleListingComponent} from "./property/property.singleListing.component";
=======
import {SearchResultsComponent} from "./search-results/search-results.component";
>>>>>>> dea92425360877f73eb235ef338622a167b594ec

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
    path: 'property',
    component: PropertySingleListingComponent
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
    path: 'example',
    component: ExampleComponent,
    data: { title: 'Example Fake Data' }
  },
  {
    path: 'search-results',
    component: SearchResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
