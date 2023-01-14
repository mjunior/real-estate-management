import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { merge, Subscription } from 'rxjs';

@Component({
  selector: 'app-deal-form',
  templateUrl: './deal-form.component.html',
  styleUrls: ['./deal-form.component.scss']
})
export class DealFormComponent implements OnInit, OnDestroy {
  dealForm: FormGroup;
  rateSubscription: Subscription; 

  constructor(private fb: FormBuilder,
    public dialogRef: MatDialogRef<DealFormComponent>,
) { 
    this.dealForm = this.fb.group({
      name: ['', Validators.required],
      purchasePrice: ['', Validators.required],
      address: ['', Validators.required],
      noi: ['', Validators.required],
      capRate: ['', Validators.required, ]
    });
  }

  ngOnInit() {
    this.rateSubscription = this.capRateSubscription();
  }

  ngOnDestroy() {
    this.rateSubscription?.unsubscribe();
  }

  capRateSubscription() {
    return merge(
      this.dealForm.controls['noi'].valueChanges,
      this.dealForm.controls['purchasePrice'].valueChanges
    ).subscribe(() => {
      const pPrice = this.dealForm.controls['purchasePrice'].value;
      const noi = this.dealForm.controls['noi'].value;
      
      const capRate = noi/pPrice * 100;
      
      this.dealForm.patchValue({ capRate })
    })
  }

  save() {
    this.dealForm.updateValueAndValidity();
    if (this.dealForm.valid) {
      this.dialogRef.close(this.dealForm.getRawValue());
    }
  }

  discart() {
    this.dialogRef.close();
  }

}
