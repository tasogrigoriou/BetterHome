import { NgModule } from '@angular/core';

import { PropertyComponent } from './property.component';
import {CommonModule} from "@angular/common";
import {PropertyRoutingModule} from "./property-routing.module";
import {PropertySingleComponent} from "./property-single.component";
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  imports: [
    MatMenuModule,
    CommonModule,
    PropertyRoutingModule
  ],
  declarations: [PropertyComponent,PropertySingleComponent]
})
export class PropertyModule { }
