import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsComponent } from './deals.component';
import { DealsRoutingModule } from './deal-routing.module';
import { DealListModule } from './deal-list/deal-list.module';
import { DealsDataService } from './services/deals-data.service';
import { DealFormModule } from './deal-form/deal-form.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    DealListModule,
    DealFormModule,
    DealsRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    DealsDataService
  ],
  declarations: [DealsComponent]
})
export class DealsModule { }
