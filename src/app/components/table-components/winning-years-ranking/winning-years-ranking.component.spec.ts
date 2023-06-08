import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinningYearsRankingComponent } from './winning-years-ranking.component';

describe('WinningYearsRankingComponent', () => {
  let component: WinningYearsRankingComponent;
  let fixture: ComponentFixture<WinningYearsRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinningYearsRankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinningYearsRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
