import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {CoreModule} from "./core/core.module";

import {HomeComponent} from "./home/home.component";
import {PropertyComponent} from "./property/property.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import { ExampleComponent } from './example/example.component';
import {AlertComponent} from "./core/components/alert/alert.component";
import {UploadComponent} from "./core/components/upload/upload.component";

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {
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
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFileUploadModule} from "angular-material-fileupload";

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule  } from '@covalent/core/steps';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';
import {CovalentFileModule} from "@covalent/core";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PropertyComponent,
    RegisterComponent,
    LoginComponent,
    ExampleComponent,
    AlertComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

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

    FlexLayoutModule,
    MatFileUploadModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentFileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
