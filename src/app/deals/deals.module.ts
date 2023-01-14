import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsComponent } from './deals.component';
import { DealsRoutingModule } from './deal-routing.module';
import { DealListModule } from './deal-list/deal-list.module';

@NgModule({
  imports: [
    CommonModule,
    DealListModule,
    DealsRoutingModule
  ],
  declarations: [DealsComponent]
})
export class DealsModule { }
