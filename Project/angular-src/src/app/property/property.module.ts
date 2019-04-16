import { NgModule } from '@angular/core';

import { PropertyComponent } from './property.component';
import {CommonModule} from "@angular/common";
import {PropertyRoutingModule} from "./property-routing.module";
import {MatMenuModule} from '@angular/material/menu';
import {PropertySingleListingComponent} from "./property.singleListing.component";
import {MatCheckboxModule, MatListModule, MatSidenavModule, MatToolbarModule} from "@angular/material";



@NgModule({
  imports: [
    MatMenuModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    CommonModule,
    PropertyRoutingModule
  ],
  declarations: [PropertyComponent,PropertySingleListingComponent]
})
export class PropertyModule { }
