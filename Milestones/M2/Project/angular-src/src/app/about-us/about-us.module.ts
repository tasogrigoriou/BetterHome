import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsListComponent } from './about-us-list.component';
import { AboutUsSingleComponent } from './about-us-single.component';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ],
  declarations: [AboutUsListComponent, AboutUsSingleComponent]
})
export class AboutUsModule { }
