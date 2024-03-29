import { Component, OnInit } from '@angular/core';
import { Observable, of, take } from 'rxjs';
import { Deal } from './interfaces/deal.interface';
import { DealsDataService } from './services/deals-data.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DealFormComponent } from './deal-form/deal-form.component';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {

  deals: Deal[];

  constructor(
    private dealService: DealsDataService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.dealService.getDeals().pipe(take(1)).subscribe((deals) => {
      this.deals = deals
    })
  }
  
  newDealDialog(): void {
    const dialogRef = this.dialog.open(DealFormComponent, {
      data: {},
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe((result: Deal) => {
      if(result) {
        this.dealService.addDeal(result);
        this.dealService.getDeals().pipe(take(1)).subscribe((deals) => {
          this.deals = [...deals]
        })
      }
    });
  }
}
