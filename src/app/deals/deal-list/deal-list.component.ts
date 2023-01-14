import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss'],
})

export class DealListComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'purchasePrice', 'noi', 'address', 'capRate'];
  
  @Input()
  data: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
