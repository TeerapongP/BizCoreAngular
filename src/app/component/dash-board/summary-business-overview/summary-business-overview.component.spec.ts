import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryBusinessOverviewComponent } from './summary-business-overview.component';

describe('SummaryBusinessOverviewComponent', () => {
  let component: SummaryBusinessOverviewComponent;
  let fixture: ComponentFixture<SummaryBusinessOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SummaryBusinessOverviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryBusinessOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
