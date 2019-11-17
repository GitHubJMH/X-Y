import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewPageComponent } from './pages/new-page/new-page.component';



const routes: Routes = [
  { path: 'home', component: NewPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [
      RouterModule.forRoot( routes, { useHash: true } )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
