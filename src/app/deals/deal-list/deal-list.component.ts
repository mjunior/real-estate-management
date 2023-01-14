import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Deal } from '../interfaces/deal.interface';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DealListComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'purchasePrice', 'noi', 'address', 'capRate'];
  
  @Input()
  data: Deal[] | null;

  constructor() { }

  ngOnInit() {
  }

}
