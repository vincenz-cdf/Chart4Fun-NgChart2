import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllChartComponent } from './all-chart.component';

describe('AllChartComponent', () => {
  let component: AllChartComponent;
  let fixture: ComponentFixture<AllChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
