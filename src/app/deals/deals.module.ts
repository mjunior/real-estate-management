import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsComponent } from './deals.component';
import { DealsRoutingModule } from './deal-routing.module';
import { DealListModule } from './deal-list/deal-list.module';
import { DealsDataService } from './services/deals-data.service';

@NgModule({
  imports: [
    CommonModule,
    DealListModule,
    DealsRoutingModule
  ],
  providers: [
    DealsDataService
  ],
  declarations: [DealsComponent]
})
export class DealsModule { }
