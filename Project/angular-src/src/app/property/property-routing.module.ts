import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PropertyComponent} from "./property.component";
import {PropertySingleComponent} from "./property-single.component";

const routes: Routes = [
  { path: '', component: PropertyComponent },
  { path: ':listings.listingAddress', component: PropertySingleComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [ RouterModule ]

})
export class PropertyRoutingModule { }
