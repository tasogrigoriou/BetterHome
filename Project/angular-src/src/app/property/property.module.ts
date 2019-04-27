import { NgModule } from '@angular/core';

import { PropertyComponent } from './property.component';
import {CommonModule} from "@angular/common";
import {PropertyRoutingModule} from "./property-routing.module";
import {MatMenuModule} from '@angular/material/menu';
import {PropertySingleListingComponent} from "./property.singleListing.component";
import {
  MatCheckboxModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatCardModule,
  MatOptionModule,
  MatSelectModule,
  MatGridListModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule, MatButtonModule, MatDialogModule, MatTabsModule
} from "@angular/material";
import {PropertySingleComponent} from "./property-single.component";
import {MatFormFieldModule} from '@angular/material/form-field';
import {DragScrollModule} from "ngx-drag-scroll/lib";
import {CoreModule} from "../core/core.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {CovalentFileModule, CovalentLayoutModule, CovalentStepsModule} from "@covalent/core";
import {CovalentHttpModule} from "@covalent/http";
import {CovalentHighlightModule} from "@covalent/highlight";
import {CovalentMarkdownModule} from "@covalent/markdown";
import {CovalentDynamicFormsModule} from "@covalent/dynamic-forms";

@NgModule({
  imports: [
    MatMenuModule,
    MatOptionModule,
    MatGridListModule,
    MatCheckboxModule,
    CoreModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatSelectModule,
    MatDialogModule,
    FlexLayoutModule,
    MatTabsModule,
    FlexLayoutModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentFileModule,
    CommonModule,
    PropertyRoutingModule,
    DragScrollModule
  ],
  declarations: [
    PropertyComponent,
    PropertySingleListingComponent,
    PropertySingleComponent
  ]
})
export class PropertyModule { }
