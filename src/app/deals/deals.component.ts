import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Deal } from './interfaces/deal.interface';
import { DealsDataService } from './services/deals-data.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  deals$: Observable<Deal[]>

  constructor(private dealService: DealsDataService) { }

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
}
