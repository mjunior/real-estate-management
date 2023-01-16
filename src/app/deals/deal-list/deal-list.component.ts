import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Deal } from '../interfaces/deal.interface';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DealListComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['name', 'purchasePrice', 'noi', 'address', 'capRate'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() set data(data : Deal[]) {
    this.dataSource = new MatTableDataSource<Deal>(data);
    this.dataSource.paginator = this.paginator;
  }

  dataSource: MatTableDataSource<Deal>

  constructor() { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
