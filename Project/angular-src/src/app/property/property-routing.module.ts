import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PropertyComponent} from "./property.component";
import {PropertySingleListingComponent} from "./property.singleListing.component";

const routes: Routes = [
  {
    path: '',
    component: PropertyComponent
  },
  {
    path: ':listing.listingId',
    component: PropertySingleListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [ RouterModule ]

})
export class PropertyRoutingModule { }
