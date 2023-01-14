import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-deal-form',
  templateUrl: './deal-form.component.html',
  styleUrls: ['./deal-form.component.scss']
})
export class DealFormComponent implements OnInit {
  dealForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dealForm = this.fb.group({
      name: ['', Validators.required],
      purchasePrice: ['', Validators.required],
      address: ['', Validators.required],
      noi: ['', Validators.required],
      capRate: ['', Validators.required]
    });
  }

}
