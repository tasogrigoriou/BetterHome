import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CoreModule} from "./core/core.module";

import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {RegisterDialog} from "./register/register.dialog";
import {LoginComponent} from "./login/login.component";
import { ExampleComponent } from './example/example.component';
import {AlertComponent} from "./core/components/alert/alert.component";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';


import {
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
  MatToolbarModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {FlexLayoutModule} from "@angular/flex-layout";
import { SearchResultsComponent } from './search-results/search-results.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    RegisterDialog,
    LoginComponent,
    ExampleComponent,
    AlertComponent,
    SearchResultsComponent
  ],
  entryComponents: [
    RegisterDialog
  ],
  imports: [
    MatMenuModule,
    MatGridListModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
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
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
