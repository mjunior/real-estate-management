import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DealListComponent } from './deal-list/deal-list.component';
import { DealsComponent } from './deals.component';


const routes: Routes = [
  {
    path: '',
    component: DealsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealsRoutingModule { }