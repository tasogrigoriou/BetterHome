import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MembersService } from './services/members.service';
import {HeaderComponent} from "./components/header/header.component";
import {ListingsService} from "./services/listings.service";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    MembersService,
    ListingsService
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
})
export class CoreModule { }
