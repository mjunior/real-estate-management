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
  
  newDealDialog(): void {
    const dialogRef = this.dialog.open(DealFormComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe((result: Deal) => {
      if(result) {
        this.dealService.addDeal(result);
      }
    });
  }
}
