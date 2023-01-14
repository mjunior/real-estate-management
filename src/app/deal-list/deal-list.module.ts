import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealListComponent } from './deal-list.component';
import { DealListRoutingModule } from './deal-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DealListRoutingModule
  ],
  declarations: [DealListComponent]
})
export class DealListModule { }
