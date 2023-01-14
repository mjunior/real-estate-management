import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealListComponent } from './deal-list.component';
import { DealListRoutingModule } from './deal-list-routing.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    CommonModule,
    DealListRoutingModule,
    MatTableModule
  ],
  declarations: [DealListComponent]
})
export class DealListModule { }
