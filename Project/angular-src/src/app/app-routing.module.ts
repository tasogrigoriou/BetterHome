import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ExampleComponent} from "./example/example.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about-us',
    loadChildren: './about-us/about-us.module#AboutUsModule'
  },
  {
    path: 'example',
    component: ExampleComponent,
    data: { title: 'Example Fake Data' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
