import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AccountComponent } from './account.component';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MatTabsModule ],
  // declarations: [ AccountComponent ],
  // bootstrap:    [ AccountComponent ]
})
export class AppModule { }
