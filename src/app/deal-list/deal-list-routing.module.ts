import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealListComponent } from './deal-list.component';


const routes: Routes = [
  {
    path: '',
    component: DealListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealListRoutingModule { }