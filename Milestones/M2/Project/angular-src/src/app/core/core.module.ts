import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MembersService } from './services/members.service';
import {HeaderComponent} from "./components/header/header.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    MembersService
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
})
export class CoreModule { }
