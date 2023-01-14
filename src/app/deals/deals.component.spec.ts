import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { DealsComponent } from './deals.component';
import { DealsModule } from './deals.module';
import { Deal } from './interfaces/deal.interface';
import { DealsDataService } from './services/deals-data.service';

const MOCK_DEAL_LIST: Deal[] = [
  { capRate: 1, purchasePrice: 1, name: 'Deal 001', noi: 1.0079, address: '6 Office Park Cir #218' },
  { capRate: 1, purchasePrice: 1, name: 'Deal 002', noi: 4.0016, address: '6 Office Park Cir #218' },
]

describe('DealFormComponent', () => {
  let fixture: ComponentFixture<DealsComponent>;
  let component: DealsComponent;
  let dealService: DealsDataService;

  const dealServiceMock = {
    getDeals: () => {
      of(MOCK_DEAL_LIST)
    },
    
    addDeal: (deal: Deal) => {}
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MatDialogModule,
        DealsModule,
      ],
      declarations: [
        DealsComponent
      ],
      providers: [
        { provide: DealsDataService, useValue: dealServiceMock },
      ]
    })

    fixture = TestBed.createComponent(DealsComponent);
    component = fixture.componentInstance;
    dealService = TestBed.inject(DealsDataService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  describe('When received dialogClose event with a Deal', () => {
    it('should call deals data service', () => {
      fixture.detectChanges();
      const serviceSpy = spyOn<DealsDataService, any>(dealService, 'addDeal')

      spyOn<MatDialog, any>(component.dialog, 'open').and.returnValue({
        afterClosed: () => {
          return of({ name: 1, address: 1, capRate: 1, noi: 1, purchasePrice: 1 })
        }
      });

      component.newDealDialog();

      expect(serviceSpy).toHaveBeenCalled();
    })
  })

  describe('When received dialogClose event WITHOUT a Deal', () => {
    it('should NOT call deals data service', () => {
      fixture.detectChanges();
      const serviceSpy = spyOn<DealsDataService, any>(dealService, 'addDeal')

      spyOn<MatDialog, any>(component.dialog, 'open').and.returnValue({
        afterClosed: () => {
          return of(undefined)
        }
      });
      component.newDealDialog();
      expect(serviceSpy).not.toHaveBeenCalled();
    })
  })

});
