import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { DealFormComponent } from './deal-form.component';
import { DealFormModule } from './deal-form.module';

describe('DealFormComponent', () => {
  let fixture: ComponentFixture<DealFormComponent>;
  let component: DealFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DealFormModule,
        NoopAnimationsModule,
      ],
      declarations: [
        DealFormComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: { close: (param: any) => {}} }
      ]
    })

    fixture = TestBed.createComponent(DealFormComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('When form is INVALID', () => {
    it('should disable save button', () => {
      fixture.detectChanges();

      component.dealForm.patchValue({
        name: '',
        address: ''
      })
      fixture.detectChanges();

      const saveButton = fixture.debugElement.query(By.css('#save-button'))
      expect(component.dealForm.valid).toBeFalsy();
      expect(saveButton.nativeElement.disabled).toBeTrue();
    });
  })

  describe('When form is VALID', () => {
    let dialogSpy: any;

    beforeEach(() => {
      fixture.detectChanges();
      dialogSpy = spyOn(component.dialogRef, 'close');
      component.dealForm.patchValue({
        name: 'name',
        address: 'address',
        noi: 1,
        purchasePrice: 1,
        capRate: 1,
      });
      fixture.detectChanges();
    })

    describe('AND click on save button', () => {
      beforeEach(() => {
        const saveButton = fixture.debugElement.query(By.css('#save-button'));
        saveButton.triggerEventHandler('click', null)
      })

      it ('should close modal seding form value', () => {
        expect(dialogSpy).toHaveBeenCalledWith({
          name: 'name',
          address: 'address',
          noi: 1,
          purchasePrice: 1,
          capRate: 1,
        })
      })
    });

    describe('AND users change the Purchase Price OR NOI', () => {
      it('should recalculate CAP RATE', () => {
        component.dealForm.patchValue({
          noi: 10,
          purchasePrice: 100,
        });
        fixture.detectChanges();
        expect(component.dealForm.controls['capRate'].value).toEqual(10)

        component.dealForm.patchValue({
          noi: 25,
          purchasePrice: 100,
        });
        fixture.detectChanges();
        expect(component.dealForm.controls['capRate'].value).toEqual(25)
      })
    })
  })
});
