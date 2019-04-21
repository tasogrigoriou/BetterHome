import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSelectModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CoreModule} from "./core/core.module";

import {HomeComponent} from "./home/home.component";
import {PropertyComponent} from "./property/property.component";
import {RegisterComponent} from "./register/register.component";
import {RegisterDialog} from "./register/register.dialog";
import {LoginComponent} from "./login/login.component";
import { ExampleComponent } from './example/example.component';
import {AlertComponent} from "./core/components/alert/alert.component";
import {AccountComponent} from  "./account/account.component";
import {AddlistingComponent} from "./addlisting/addlisting.component";



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material';

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
    PropertyComponent,
    RegisterComponent,
    RegisterDialog,
    LoginComponent,
    ExampleComponent,
    AlertComponent,
    SearchResultsComponent,
    AccountComponent,
    AddlistingComponent
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
    FlexLayoutModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
