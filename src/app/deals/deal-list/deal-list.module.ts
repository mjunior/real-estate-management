import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealListComponent } from './deal-list.component';
import { DealsRoutingModule } from '../deal-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
  imports: [
    CommonModule,
    DealsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [DealListComponent],
  exports: [
    DealListComponent
  ]
})
export class DealListModule { }
