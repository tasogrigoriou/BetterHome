import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsListComponent } from './about-us-list.component';
import { AboutUsSingleComponent } from './about-us-single.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsListComponent
  },
  {
    path: ':member.name',
    component: AboutUsSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutUsRoutingModule { }
