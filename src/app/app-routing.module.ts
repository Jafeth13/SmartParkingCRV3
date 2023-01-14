import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSmartComponent } from './home-smart/home-smart.component';

const routes: Routes = [{path:'homes',component:HomeSmartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
