import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './landing/landing.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule],
  providers: [
  ]
})
export class AppRoutingModule { }
