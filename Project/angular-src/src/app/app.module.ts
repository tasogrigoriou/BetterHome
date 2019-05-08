import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatSelectModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CoreModule} from "./core/core.module";

import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {RegisterDialog} from "./register/register.dialog";
import {LoginComponent} from "./login/login.component";
import {ExampleComponent} from './example/example.component';
import {AlertComponent} from "./core/components/alert/alert.component";
import {UploadComponent} from "./core/components/upload/upload.component";
import {AccountComponent} from  "./account/account.component";
import {AddListingComponent} from "./add-listing/add-listing.component";
import {SearchResultsComponent} from './search-results/search-results.component';
import {LogoutComponent} from './logout/logout.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import {CovalentFileModule} from "@covalent/core";
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import {DragScrollModule} from "ngx-drag-scroll/lib";
import {DeleteDialog} from "./account/delete.dialog";
import { UpdateLoginComponent } from './update-login/update-login.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminListingsComponent } from './admin-listings/admin-listings.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { AdminImagesComponent } from './admin-images/admin-images.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    RegisterDialog,
    DeleteDialog,
    LoginComponent,
    ExampleComponent,
    AlertComponent,
    SearchResultsComponent,
    AlertComponent,
    UploadComponent,
    LogoutComponent,
    AccountComponent,
    AddListingComponent,
    AdvancedSearchComponent,
    UpdateLoginComponent,
    UpdatePropertyComponent,
    AdminUsersComponent,
    AdminListingsComponent,
    UpdateAccountComponent,
    AdminImagesComponent
  ],
  entryComponents: [
    RegisterDialog,
    DeleteDialog
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
    MatTabsModule,
    FlexLayoutModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentFileModule,
    DragScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
