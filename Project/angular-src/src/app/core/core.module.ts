import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MembersService } from './services/members.service';
import {HeaderComponent} from "./components/header/header.component";
import {ListingsService} from "./services/listings.service";

import {
  MatButtonModule, MatCardModule, MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSortModule, MatTableModule, MatToolbarModule
} from "@angular/material";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FooterComponent} from "./components/footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    NgbModule
  ],
  providers: [
    MembersService,
    ListingsService
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class CoreModule { }
