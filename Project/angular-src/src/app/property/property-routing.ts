import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PropertyComponent} from "./property.component";

const routes: Routes = [
  { path: '', component: PropertyComponent },
  { path: 'listings.listingAddress', component: PropertyComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [ RouterModule ]

})
export class AppRoutingModule { }
