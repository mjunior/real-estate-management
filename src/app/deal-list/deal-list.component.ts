import { Component, OnInit } from '@angular/core';

export interface Deal {
  name: string;
  purchasePrice: number;
  address: string;
  noi: number;
  capRate: number
}

const ELEMENT_DATA: Deal[] = [
  { capRate: 1, purchasePrice: 1, name: 'Deal 001', noi: 1.0079, address: '6 Office Park Cir #218' },
  { capRate: 1, purchasePrice: 1, name: 'Deal 002', noi: 4.0016, address: '6 Office Park Cir #218' },
  { capRate: 1, purchasePrice: 1, name: 'Deal 003', noi: 6.941, address: '6 Office Park Cir #218' },
  { capRate: 1, purchasePrice: 1, name: 'Deal 004', noi: 9.0111, address: '6 Office Park Cir #218' },
  { capRate: 1, purchasePrice: 1, name: 'Deal 005', noi: 10.811, address: '6 Office Park Cir #218' },
  { capRate: 1, purchasePrice: 1, name: 'Deal 006', noi: 11.0107, address: '6 Office Park Cir #218' },
  { capRate: 1, purchasePrice: 1, name: 'Deal 007', noi: 14.0067, address: '6 Office Park Cir #218' },
  { capRate: 1, purchasePrice: 1, name: 'Deal 008', noi: 15.9994, address: '6 Office Park Cir #218' },
  { capRate: 1, purchasePrice: 1, name: 'Deal 009', noi: 18.9984, address: '6 Office Park Cir #218' },
  { capRate: 1, purchasePrice: 1, name: 'Deal 010', noi: 20.1797, address: '6 Office Park Cir #218' },
];
@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.scss']
})
export class DealListComponent implements OnInit {
  
  displayedColumns: string[] = ['name', 'purchasePrice', 'noi', 'address', 'capRate'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
