import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Deal } from './interfaces/deal.interface';
import { DealsDataService } from './services/deals-data.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DealFormComponent } from './deal-form/deal-form.component';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  deals$: Observable<Deal[]>

  constructor(
    private dealService: DealsDataService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.deals$ = this.dealService.getDeals();
  }


  newDeal() {
    this.dealService.addDeal({
      name: 'new deal',
      purchasePrice: 1,
      address: 'string',
      noi: 22222,
      capRate: 2222
    })
  }

  newDealDialog(): void {
    const dialogRef = this.dialog.open(DealFormComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
}
